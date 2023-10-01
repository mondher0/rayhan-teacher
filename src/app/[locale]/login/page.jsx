"use client";
import "./login.css";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useLocale, useTranslations } from "next-intl";

const LoginPage = () => {
  const router = useRouter();
  const t = useTranslations("Auth");
  const locale = useLocale();
  return (
    <>
      <main className="main-form">
        <div
          className={
            locale === "ar" ? "login-form login-form-ar" : "login-form"
          }
        >
          <p
            className="welcome"
          >
            {t("LoginDesc")}
          </p>
          <h1 className="title">{t("LoginTitle")}</h1>
          <form>
            <div
              className={
                locale === "ar"
                  ? "form-control form-control-ar"
                  : "form-control"
              }
            >
              <label htmlFor="phone-number">{t("loginPhoneNumber")}</label>
              <input type="tel" id="phone-number" className="input-control" />
            </div>
            <div
              className={
                locale === "ar"
                  ? "form-control form-control-ar"
                  : "form-control"
              }
            >
              <label htmlFor="phone-number">{t("loginPassword")}</label>
              <input
                type="password"
                id="phone-number"
                className="input-control"
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
              {t("loginBtn")}
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
