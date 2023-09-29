import { useTranslations } from "next-intl";
import Image from "next/image";

export default function Home() {
  const t = useTranslations("Index");
  return <h1>{t("title")}</h1>;
}
