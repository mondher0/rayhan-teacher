import "./globals.css";
import { useLocale } from "next-intl";
import { notFound } from "next/navigation";
import ChildLayout from "./ChildLayout";
import { getUserInfo } from "@/utils/lib";

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
    <ChildLayout children={children} locale={locale} messages={messages} />
  );
}
