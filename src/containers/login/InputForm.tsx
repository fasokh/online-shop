import { ChangeEvent, FC, FormEvent, useState } from "react";
import OTPForm from "./OTPForm";
import { useDispatch } from "react-redux";
import { setPhoneNumber } from "@/store/phoneNumber";

const InputForm: FC = () => {
  const [input, setInput] = useState("");
  const [error, setError] = useState<string | null>("");
  const [isTouched, setIsTouched] = useState(false);
  const [isValid, setIsValid] = useState(false);
  const dispatch = useDispatch();

  const inputHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
    setError(null); //خطا هنگام تایپ مجدد پاک شود
  };

  const submitHandler = (e: FormEvent) => {
    e.preventDefault();

    const twoFirstNumber = input.slice(0, 2);

    if (
      +input.length !== 11 || // شماره موبایل حتما باید 11 کاراکتر باشد
      (!twoFirstNumber.includes("09") && !input.includes("@"))
    ) {
      setError("شماره موبایل یا ایمیل اشتباه است");
      return;
    }
    if (!error && input) {
      setIsValid(true);
      dispatch(setPhoneNumber(input));
    }
    console.log("ورودی", input);
    setError(null);
  };

  return (
    <div>
      {!isValid && (
        <form
          onSubmit={submitHandler}
          className="flex justify-center items-center mt-20 text-right text-lg font-sans"
        >
          <div className="p-10 border border-gray-300 rounded-lg sm:w-2/3 md:w-1/3">
            <div>
              <h3 className="font-bold">ورود | ثبت نام</h3>
            </div>
            <div className="mt-4 text-gray-700">
              <p>
                !سلام
                <br />
                لطفا شماره موبایل یا ایمیل خود را وارد کنید
              </p>
            </div>
            <div></div>
            <div className="mt-4">
              <input
                value={input}
                onChange={inputHandler}
                onBlur={() => setIsTouched(true)}
                onFocus={() => setIsTouched(true)}
                className={`w-full p-2 border border-gray-300 rounded-xl focus:outline-none text-right ${
                  error || isTouched ? "border-red-500" : "border-gray-300"
                }`}
                placeholder="شماره موبایل یا ایمیل"
              />
            </div>
            {error && (
              <div className="font-sans mt-4 text-red-600 text-sm">{error}</div>
            )}
            <div className="mt-5">
              <button className="bg-red-500 text-white font-bold rounded-lg px-6 py-2 hover:bg-red-600">
                ورود
              </button>
            </div>
          </div>
        </form>
      )}
      {isValid && <OTPForm />}
    </div>
  );
};

export default InputForm;
