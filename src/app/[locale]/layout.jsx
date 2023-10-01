import "./globals.css";
import { useLocale } from "next-intl";
import { notFound } from "next/navigation";
import { NextIntlClientProvider } from "next-intl";
import SideBar from "../components/side-bar/SideBar";
import NavBar from "../components/nav-bar/NavBar";

export const metadata = {
  title: "Rayhan-teacher",
  description: "Generated by create next app",
};

export default async function RootLayout({ children, params }) {
  const locale = useLocale();
  let messages;
  try {
    messages = (await import(`../../messages/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }

  if (params.locale !== locale) {
    notFound();
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
