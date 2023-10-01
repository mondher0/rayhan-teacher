"use client";
import "./globals.css";
import { useLocale } from "next-intl";
import { notFound, usePathname } from "next/navigation";
import { NextIntlClientProvider } from "next-intl";
import SideBar from "../components/side-bar/SideBar";
import NavBar from "../components/nav-bar/NavBar";

export default async function RootLayout({ children, params }) {
  const locale = useLocale();
  const path = usePathname();
  let messages;
  try {
    messages = (await import(`../../messages/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }

  if (params.locale !== locale) {
    notFound();
  }
  if (path.includes("login")) {
    return (
      <html lang={locale}>
        <body>
          <NextIntlClientProvider locale={locale} messages={messages}>
            {children}
          </NextIntlClientProvider>
        </body>
      </html>
    );
  }

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider locale={locale} messages={messages}>
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
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
