"use client";
import "./nav-bar.css";
import { IoIosNotificationsOutline } from "react-icons/io";
import { FiLogOut } from "react-icons/fi";
import Image from "next/image";
import avatar from "./avatar.svg";
import keyBoardOpen from "./keyboardopen.svg";
import { useLocale, useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import LanguageChanger from "../language-changer/LanguageChanger";
import useAuthContext from "@/app/hooks/useAuthContext";
import { useRouter } from "next/navigation";
import { getCookie } from "cookies-next";
import { baseUrl } from "@/utils/constants";

const NavBar = () => {
  const t = useTranslations("Index");
  const locale = useLocale();
  const [showLanguage, setShowLanguage] = useState(false);
  const { handleLogout } = useAuthContext();
  const router = useRouter();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  // get user info
  const getUserInfo = async () => {
    try {
      const token = getCookie("token");
      console.log("--------------token from getUserInfo", token);
      if (!token) return null;
      const response = await fetch(`${baseUrl}/user/info`, {
        cache: "no-cache",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const userInfo = await response.json();
      console.log("--------------userInfo from getUserInfo", userInfo);
      setLastName(userInfo.last_name);
      setFirstName(userInfo.first_name);
    } catch (error) {
      console.log("--------------error from getUserInfo", error);
      throw new Error(error);
    }
  };

  useEffect(() => {
    getUserInfo();
  }, []);
  return (
    <nav className="nav-bar">
      <div className="nav-btns login-nav">
        <div
          className={locale === "ar" ? "user-info user-info-ar" : "user-info"}
        >
          <div className="text">
            <p className="name">
              {firstName} {lastName}
            </p>
            <p className="job">{t("teacher")}</p>
          </div>
          <div className="avatar hover">
            <Image src={avatar} alt="avatar" width={60} height={60} />
          </div>
        </div>

        <div className="divider"></div>
        <Image src={keyBoardOpen} alt="keyboard open" width={30} height={30} />

        <IoIosNotificationsOutline
          size={40}
          color="#838E9E"
          className="hover"
          onClick={() => {
            router.push("/notifications");
          }}
        />
        <div
          onClick={() => {
            setShowLanguage(!showLanguage);
          }}
        >
          <LanguageChanger
            setShowLanguage={setShowLanguage}
            showLanguage={showLanguage}
            setShowNotifications={setShowLanguage}
          />
        </div>

        <FiLogOut
          size={30}
          color="#838E9E"
          className="hover"
          onClick={handleLogout}
        />
      </div>
    </nav>
  );
};

export default NavBar;
