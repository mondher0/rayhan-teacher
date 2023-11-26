import { cookies } from "next/headers";
import { baseUrl } from "./constants";

// getting the token from cookie
export const getToken = () => {
  const token = cookies().get("token");
  return token?.value;
};

// getting user info from server
export const getUserInfo = async () => {
  try {
    const token = getToken();
    if (!token) return null;
    const response = await fetch(`${baseUrl}/user/info`, {
      cache: "no-cache",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const userInfo = await response.json();
    console.log("--------------userInfo from getUserInfo", userInfo);
    return userInfo;
  } catch (error) {
    console.log("--------------error from getUserInfo", error);
    throw new Error(error);
  }
};
