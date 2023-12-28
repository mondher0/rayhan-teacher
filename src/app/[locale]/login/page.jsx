"use client";
import "./login.css";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useLocale, useTranslations } from "next-intl";
import useAuthContext from "@/app/hooks/useAuthContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loader from "@/app/components/loader/Loader";
import LanguageChanger from "@/app/components/language-changer/LanguageChanger";
import { useState } from "react";

const LoginPage = () => {
  const router = useRouter();
  const t = useTranslations("Auth");
  const locale = useLocale();
  const { user, setUser, handleLogin, isLoading } = useAuthContext();
  const [showLanguage, setShowLanguage] = useState(false);
  return (
    <>
      <nav
        className="nav-bar"
        style={{
          background: "#DDFFF8",
          paddingBottom: "0",
        }}
      >
        <div className="nav-btns login-nav">
          <LanguageChanger
            showLanguage={showLanguage}
            setShowLanguage={setShowLanguage}
            pathName="/login"
          />
        </div>
      </nav>
      <main className="main-form">
        <ToastContainer />
        <div
          className={
            locale === "ar" ? "login-form login-form-ar" : "login-form"
          }
        >
          <div className="login-logo">
            <Image
              src="/images/login-logo.svg"
              alt="login"
              width={171}
              height={166}
              className="login-logo"
            />
          </div>
          <p className="welcome">{t("LoginDesc")}</p>
          <h1 className="title">{t("LoginTitle")}</h1>
          <form onSubmit={handleLogin}>
            <div
              className={
                locale === "ar"
                  ? "form-control form-control-ar"
                  : "form-control"
              }
            >
              <label htmlFor="email">{t("loginPhoneNumber")}</label>
              <input
                type="email"
                id="email"
                className="input-control"
                onChange={(e) =>
                  setUser({
                    ...user,
                    email: e.target.value,
                  })
                }
              />
            </div>
            <div
              className={
                locale === "ar"
                  ? "form-control form-control-ar"
                  : "form-control"
              }
            >
              <label htmlFor="password">{t("loginPassword")}</label>
              <input
                type="password"
                id="password"
                className="input-control"
                onChange={(e) =>
                  setUser({
                    ...user,
                    password: e.target.value,
                  })
                }
              />
            </div>
            <div className={locale === "ar" ? "forgot forgot-ar" : "forgot"}>
              <div className="remember-me">
                <input type="checkbox" id="remember-me" />
                <label htmlFor="remember-me">{t("loginRemember")}</label>
              </div>
              <p
                className="forgot-password hover"
                onClick={() => {
                  router.push("/login/reset-password");
                }}
              >
                {t("loginForget")}
              </p>
            </div>
            <button className="form-control-btn hover" type="submit">
              {isLoading ? <Loader /> : t("loginBtn")}
            </button>
          </form>
        </div>
        <div className="login-image">
          <Image
            src="/images/login-student.png"
            alt="Picture of the author"
            width={700}
            height={700}
            className="login-image"
          />
        </div>
      </main>
    </>
  );
};

export default LoginPage;
