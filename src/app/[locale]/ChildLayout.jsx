"use client";
import { usePathname } from "next/navigation";
import SideBar from "../components/side-bar/SideBar";
import NavBar from "../components/nav-bar/NavBar";
import { NextIntlClientProvider } from "next-intl";
import AuthProvider from "@/context/AuthContext";

const ChildLayout = ({ children, messages, locale }) => {
  console.log("--------------userinfo from child layout", userInfo);
  const pathname = usePathname();
  console.log(children);
  if (pathname.includes("login")) {
    return (
      <html lang={locale}>
        <body>
          <NextIntlClientProvider locale={locale} messages={messages}>
            <AuthProvider> {children}</AuthProvider>
          </NextIntlClientProvider>
        </body>
      </html>
    );
  }

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <AuthProvider>
            <div
              className={
                locale === "ar"
                  ? "teacher-container-ar teacher-container"
                  : "teacher-container"
              }
            >
              <SideBar />
              <div className="page-content">
                <NavBar />
                {children}
              </div>
            </div>
          </AuthProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
};

export default ChildLayout;
