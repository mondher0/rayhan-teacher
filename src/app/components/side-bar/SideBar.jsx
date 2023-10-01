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
import { useLocale } from "next-intl";

const SideBar = () => {
  const path = usePathname();
  console.log("-----------------router", path);
  const locale = useLocale();

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
          <Link href="/">Dashboard</Link>
        </li>
        <li className={`link ${isActive(`/${locale}/lives`) ? "active" : ""}`}>
          <Image
            src={isActive(`/${locale}/lives`) ? whiteLives : live}
            alt="Picture of the author"
            width={20}
            height={20}
            className="test"
          />
          <Link href="/lives">Lives</Link>
        </li>
        <li className={`link ${isActive(`/${locale}/rooms`) ? "active" : ""}`}>
          <Image
            src={isActive(`/${locale}/rooms`) ? whiteRooms : rooms}
            alt="Picture of the author"
            width={20}
            height={20}
          />
          <Link href="/rooms">Rooms</Link>
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
          <Link href="/notifications">Notifications</Link>
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
          <Link href="/feedbacks">Feedbacks</Link>
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
          <Link href="/tickets?page=1">Tickets</Link>
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
          <Link href="/payments?page=1">Payment</Link>
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
          <Link href="/courses?page=1">Courses</Link>
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
          <Link href="/profile">Profile</Link>
        </li>
      </ul>
    </aside>
  );
};

export default SideBar;
