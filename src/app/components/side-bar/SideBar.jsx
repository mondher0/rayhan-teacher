"use client";
import Logo from "@/app/atoms/logo/Logo";
import "./SideBar.css";
import Link from "next/link";
import activity from "./activity.svg";
import live from "./live.svg";
import Image from "next/image";
import rooms from "./rooms.svg";
import sms from "./sms.svg";
import courses from "./courses.svg";
import profile from "./profile.svg";
import payment from "./payment.svg";
import unselectedActivity from "./unselected-activity.svg";
import whiteLives from "./white-lives.svg";
import whiteRooms from "./white-rooms.svg";
import whiteSms from "./white-sms.svg";
import whiteCourses from "./white-courses.svg";
import whiteProfile from "./white-profile.svg";
import whitePayment from "./white-payment.svg";
import notification from "./notification.svg";
import whiteNotification from "./white-notification.svg";
import like from "./like.svg";
import whiteLike from "./white-like.svg";
import { usePathname } from "next/navigation"; // Import useRouter
import { useLocale, useTranslations } from "next-intl";

const SideBar = () => {
  const path = usePathname();
  console.log("-----------------router", path);
  const locale = useLocale();
  const t = useTranslations("Index");

  // Define a function to check if a link is active
  const isActive = (href) => path === href;
  return (
    <aside className="side-bar">
      <Logo />
      <ul className="links">
        <li className={`link ${isActive(`/${locale}`) ? "active" : ""}`}>
          <Image
            src={isActive(`/${locale}`) ? activity : unselectedActivity}
            alt="Picture of the author"
            width={20}
            height={20}
          />
          <Link href={`/${locale}`}>{t("dashboard")}</Link>
        </li>
        <li className={`link ${isActive(`/${locale}/lives`) ? "active" : ""}`}>
          <Image
            src={isActive(`/${locale}/lives`) ? whiteLives : live}
            alt="Picture of the author"
            width={20}
            height={20}
            className="test"
          />
          <Link href={`/${locale}/lives`}>{t("lives")}</Link>
        </li>
        <li className={`link ${isActive(`/${locale}/rooms`) ? "active" : ""}`}>
          <Image
            src={isActive(`/${locale}/rooms`) ? whiteRooms : rooms}
            alt="Picture of the author"
            width={20}
            height={20}
          />
          <Link href={`/${locale}/rooms`}>{t("rooms")}</Link>
        </li>
        <li
          className={`link ${
            isActive(`/${locale}/notifications`) ? "active" : ""
          }`}
        >
          <Image
            src={
              isActive(`/${locale}/notifications`)
                ? whiteNotification
                : notification
            }
            alt="Picture of the author"
            width={20}
            height={20}
          />
          <Link href={`/${locale}/notifications`}>{t("notifications")}</Link>
        </li>
        <li
          className={`link ${isActive(`/${locale}/feedbacks`) ? "active" : ""}`}
        >
          <Image
            src={isActive(`/${locale}/feedbacks`) ? whiteLike : like}
            alt="Picture of the author"
            width={20}
            height={20}
          />
          <Link href={`/${locale}/feedbacks`}>{t("feedbacks")}</Link>
        </li>
        <li
          className={`link ${isActive(`/${locale}/tickets`) ? "active" : ""}`}
        >
          <Image
            src={isActive(`/${locale}/tickets`) ? whiteSms : sms}
            alt="Picture of the author"
            width={20}
            height={20}
          />
          <Link href={`/${locale}/tickets?page=1`}>{t("tickets")}</Link>
        </li>
        <li
          className={`link ${isActive(`/${locale}/payments`) ? "active" : ""}`}
        >
          <Image
            src={isActive(`/${locale}/payments`) ? whitePayment : payment}
            alt="Picture of the author"
            width={20}
            height={20}
          />
          <Link href={`/${locale}/payments?page=1`}>{t("payments")}</Link>
        </li>
        <li
          className={`link ${isActive(`/${locale}/courses`) ? "active" : ""}`}
        >
          <Image
            src={isActive(`/${locale}/courses`) ? whiteCourses : courses}
            alt="Picture of the author"
            width={20}
            height={20}
          />
          <Link href={`/${locale}/courses?page=1`}>{t("courses")}</Link>
        </li>
        <li
          className={`link ${isActive(`/${locale}/profile`) ? "active" : ""}`}
        >
          <Image
            src={isActive(`/${locale}/profile`) ? whiteProfile : profile}
            alt="Picture of the author"
            width={20}
            height={20}
          />
          <Link href={`/${locale}/profile`}>{t("profile")}</Link>
        </li>
      </ul>
    </aside>
  );
};

export default SideBar;
