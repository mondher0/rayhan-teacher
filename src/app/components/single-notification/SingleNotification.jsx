import Image from "next/image";
import "./single-notification.css";
import { useLocale } from "next-intl";

const SingleNotification = ({ icon, not, time }) => {
  const locale = useLocale();
  return (
    <div
      className={
        locale === "ar"
          ? "single-notification-ar single-notification"
          : "single-notification"
      }
    >
      <div className="not-text">
        <Image src={icon} alt="notification icon" width={30} height={30} />
        <p className="not">{not}</p>
      </div>
      <p className="not-time">{time}</p>
    </div>
  );
};

export default SingleNotification;
