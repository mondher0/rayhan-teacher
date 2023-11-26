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
          : "something went wrong"
      );
      console.log("--------------error from handle login", error);
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
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
export default AuthProvider;
