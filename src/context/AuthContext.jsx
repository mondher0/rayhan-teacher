"use client";
import axios from "axios";
import { createContext, useState } from "react";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { deleteCookie, getCookie, setCookie } from "cookies-next";
import { baseUrl } from "@/utils/constants";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [tempCode, setTempCode] = useState(null);
  const router = useRouter();
  const [firstCode, setFirstCode] = useState("");
  const [secondCode, setSecondCode] = useState("");
  const [thirdCode, setThirdCode] = useState("");
  const [fourthCode, setFourthCode] = useState("");
  const [fifthCode, setFifthCode] = useState("");
  const [success, setSuccess] = useState(false);

  // handle login
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      const data = {
        email: user.email, //required
        password: user.password, //required
      };
      const response = await axios.post(`${baseUrl}/auth/teacher/login`, data);
      console.log("--------------response from handle login", response);
      setCookie("token", response.data.data.token);
      console.log(getCookie("token"));
      setIsLoading(false);
      router.push("/");
    } catch (error) {
      setIsLoading(false);
      toast.error(
        error.response.data.message !== "undifined"
          ? error.response.data.message
          : "something went wrong",
      );
      console.log("--------------error from handle login", error);
    }
  };

  //  handle forgot password
  const handleForgotPassword = async (e) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      const data = {
        email: user.email, //required
      };
      const response = await axios.post(
        `${baseUrl}/auth/teacher/forgot_password`,
        data,
      );
      console.log(
        "--------------response from handle forgot password",
        response,
      );
      setTempCode(response.data.data.code);
      setIsLoading(false);
      getTempCode();
      router.push("/login/enter-code");
    } catch (error) {
      setIsLoading(false);
      toast.error(
        error.response.data.message !== "undifined"
          ? error.response.data.message
          : "something went wrong",
      );
      console.log("--------------error from handle forgot password", error);
    }
  };

  // get temp code
  const getTempCode = async () => {
    try {
      setIsLoading(true);
      console.log("--------------user from get temp code", user);
      const response = await axios.get(
        `${baseUrl}/get_code_test?email=${user.email}`,
      );
      console.log("--------------response from get temp code", response);
      setUser({
        ...user,
        code: response.data.code,
      });
      setFirstCode(response.data.code[0]);
      setSecondCode(response.data.code[1]);
      setThirdCode(response.data.code[2]);
      setFourthCode(response.data.code[3]);
      setFifthCode(response.data.code[4]);
      setIsLoading(false);
      // router.push("/register/account-verification");
    } catch (error) {
      setIsLoading(false);
      toast.error("something went wrong");
      console.log("--------------error from get temp code", error);
    }
  };

  // check code
  const checkCode = async (e) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      const data = {
        email: user.email, //required
        code: user.code, //required
      };
      const response = await axios.post(
        `${baseUrl}/auth/teacher/check_code`,
        data,
      );
      console.log("--------------response from check code", response);
      setIsLoading(false);
      router.push("/login/change-password");
    } catch (error) {
      setIsLoading(false);
      toast.error("something went wrong");
      console.log("--------------error from check code", error);
    }
  };

  // reset password
  const resetPassword = async (e) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      const data = {
        email: user.email, //required
        code: user.code, //required
        password: user.password, //required
        password_confirmation: user.password_confirmation, //required
      };
      const response = await axios.post(
        `${baseUrl}/auth/teacher/reset_password`,
        data,
      );
      console.log("--------------response from reset password", response);
      setIsLoading(false);
      toast.success("password changed successfully");
      setTimeout(() => {
        router.push("/login");
      }, 2000);
    } catch (error) {
      setIsLoading(false);
      toast.error("something went wrong");
      console.log("--------------error from reset password", error);
    }
  };

  // handle logout
  const handleLogout = () => {
    router.push("/login");
  };
  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        isLoading,
        setIsLoading,
        handleLogin,
        handleLogout,
        handleForgotPassword,
        getTempCode,
        firstCode,
        setFirstCode,
        secondCode,
        setSecondCode,
        thirdCode,
        setThirdCode,
        fourthCode,
        setFourthCode,
        fifthCode,
        setFifthCode,
        checkCode,
        resetPassword,
        success,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
export default AuthProvider;
