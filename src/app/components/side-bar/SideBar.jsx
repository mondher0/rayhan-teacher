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
import { IoIosNotificationsOutline } from "react-icons/io";
import { AiOutlineLike } from "react-icons/ai";
import { usePathname } from "next/navigation"; // Import useRouter

const SideBar = () => {
  const path = usePathname();
  console.log("-----------------router", path);

  // Define a function to check if a link is active
  const isActive = (href) => path.includes(href);
  return (
    <aside className="side-bar">
      <Logo />
      <ul className="links">
        <li className={`link ${isActive("/") ? "active" : ""}`}>
          <Image
            src={isActive("/") ? activity : unselectedActivity}
            alt="Picture of the author"
            width={20}
            height={20}
          />
          <Link href="/">Dashboard</Link>
        </li>
        <li className={`link ${isActive("/lives") ? "active" : ""}`}>
          <Image
            src={isActive("/lives") ? whiteLives : live}
            alt="Picture of the author"
            width={20}
            height={20}
            className="test"
          />
          <Link href="/lives">Lives</Link>
        </li>
        <li className={`link ${isActive("/rooms") ? "active" : ""}`}>
          <Image
            src={isActive("/rooms") ? whiteRooms : rooms}
            alt="Picture of the author"
            width={20}
            height={20}
          />
          <Link href="/rooms">Rooms</Link>
        </li>
        <li className={`link ${isActive("/notifications") ? "active" : ""}`}>
          <IoIosNotificationsOutline
            size={20}
            color={isActive("/notifications") ? "#fff" : "#838E9E"}
          />
          <Link href="/notifications">Notifications</Link>
        </li>
        <li className={`link ${isActive("/feedbacks") ? "active" : ""}`}>
          <AiOutlineLike
            size={20}
            color={isActive("/feedbacks") ? "#fff" : "#838E9E"}
          />
          <Link href="/feedbacks">Feedbacks</Link>
        </li>
        <li className={`link ${isActive("/tickets") ? "active" : ""}`}>
          <Image
            src={isActive("/tickets") ? whiteSms : sms}
            alt="Picture of the author"
            width={20}
            height={20}
          />
          <Link href="/payment">Tickets</Link>
        </li>
        <li className={`link ${isActive("/payment") ? "active" : ""}`}>
          <Image
            src={isActive("/payment") ? whitePayment : payment}
            alt="Picture of the author"
            width={20}
            height={20}
          />
          <Link href="/payment">Payment</Link>
        </li>
        <li className={`link ${isActive("/courses") ? "active" : ""}`}>
          <Image
            src={isActive("/courses") ? whiteCourses : courses}
            alt="Picture of the author"
            width={20}
            height={20}
          />
          <Link href="/courses">Courses</Link>
        </li>
        <li className={`link ${isActive("/profile") ? "active" : ""}`}>
          <Image
            src={isActive("/profile") ? whiteProfile : profile}
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
