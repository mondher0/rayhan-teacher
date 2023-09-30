import Image from "next/image";
import "./single-notification.css";

const SingleNotification = ({ icon, not, time }) => {
  return (
    <div className="single-notification">
      <div className="not-text">
        <Image src={icon} alt="notification icon" width={30} height={30} />
        <p className="not">{not}</p>
      </div>
      <p className="not-time">{time}</p>
    </div>
  );
};

export default SingleNotification;
