import { NextPage } from "next";
import SimpleMenu from "@/components/SimpleMenu";
import InputForm from "./InputForm";

const LoginPage: NextPage = () => {
  return (
    <div>
      <SimpleMenu />
      <InputForm />
    </div>
  );
};

export default LoginPage;
