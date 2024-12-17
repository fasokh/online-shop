import { useCountdown } from "@/hooks/useCountdown";
import { RootState } from "@/store/app";
import { FC, useState, ChangeEvent, FormEvent, useEffect } from "react";
import { useSelector } from "react-redux";

const OTPForm: FC = () => {
  const [input, setInput] = useState("");
  const [error, setError] = useState<string | null>("");
  const [isTouched, setIsTouched] = useState(false);
  const [count, { startCountdown, resetCountdown }] = useCountdown({
    countStart: 120,
    intervalMs: 1000,
  });
  const [getCode, setGetCode] = useState(false);
  const [timer, setTimer] = useState("");
  const phoneNumber = useSelector((state: RootState) => state.phone.phoneNumber);

  const getCodeHandler = () => {
    if (count === 0) {
      resetCountdown();
      setGetCode(true);
      startCountdown();
    }
  };

  useEffect(() => {
    startCountdown();
    const minutes = Math.floor(count / 60);
    const seconds = count % 60;
    const total = `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
    setTimer(total);
  }, [count]);

  const inputHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
    setError(null); //خطا هنگام تایپ مجدد پاک شود
  };

  const submitHandler = (e: FormEvent) => {
    e.preventDefault();

    if (
      +input.length !== 5 // کد حتما باید 5 کاراکتر باشد
    ) {
      setError("کد تایید اشتباه وارد شده است");
      return;
    }

    if (input && !error) {
      setIsTouched(true);
    }
    console.log("ورودی", input);
    setError(null);
  };

  return (
    <form
      onSubmit={submitHandler}
      className="flex justify-center items-center mt-20 text-right text-lg font-sans"
    >
      <div className="p-10 border border-gray-300 rounded-lg sm:w-2/3 md:w-1/3">
        <div>
          <h3 className="font-bold">کد تایید را وارد کنید</h3>
        </div>
        <div className="mt-4 text-gray-700">
          <p>کد تایید برای شماره {phoneNumber} پیامک شد</p>
        </div>
        <div></div>
        <div className="mt-4">
          <input
            value={input}
            onChange={inputHandler}
            onBlur={() => setIsTouched(true)}
            onFocus={() => setIsTouched(true)}
            className={`w-full p-2 border border-gray-300 rounded-xl focus:outline-none text-right ${
              error && isTouched ? "border-red-500" : "border-gray-300"
            }`}
          />
        </div>
        {error && (
          <div className="font-sans mt-4 text-red-600 text-sm">{error}</div>
        )}
        {!getCode && <div> {timer} دریافت مجدد کد</div>}
        {getCode && <button onClick={getCodeHandler}>دریافت مجدد کد</button>}
        <div className="mt-5">
          <button
            // onClick={validationHandler}
            className="bg-red-500 text-white font-bold rounded-lg px-6 py-2 hover:bg-red-600"
          >
            تایید
          </button>
        </div>
      </div>
    </form>
  );
};

export default OTPForm;
