"use client";
import { AuthContext } from "@/context/AuthContext";
import { useContext } from "react";
const useAuthContext = () => {
  return useContext(AuthContext);
};
export default useAuthContext;
