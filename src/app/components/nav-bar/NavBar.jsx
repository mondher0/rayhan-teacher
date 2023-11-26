"use client";
import "./nav-bar.css";
import { IoIosNotificationsOutline } from "react-icons/io";
import { FiLogOut } from "react-icons/fi";
import Image from "next/image";
import avatar from "./avatar.svg";
import keyBoardOpen from "./keyboardopen.svg";
import { useLocale, useTranslations } from "next-intl";
import { useState } from "react";
import LanguageChanger from "../language-changer/LanguageChanger";
import useAuthContext from "@/app/hooks/useAuthContext";

const NavBar = () => {
  const t = useTranslations("Index");
  const locale = useLocale();
  const [showLanguage, setShowLanguage] = useState(false);
  const { handleLogout } = useAuthContext();
  return (
    <nav className="nav-bar">
      <div className="nav-btns login-nav">
        <div
          className={locale === "ar" ? "user-info user-info-ar" : "user-info"}
        >
          <div className="text">
            <p className="name">Mondher Mameri</p>
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
