import { useTranslations } from "next-intl";
import StudentInLiveRoom from "../student-in-live-rom/StudentInLiveRoom";
import "./in-lives-rooms.css";

const InLivesRooms = ({ text }) => {
  const t = useTranslations("Index");
  return (
    <div className="in-live-room">
      <div className="in-live-room-title">
        <p className="text">{text}</p>
        <p className="block">{t("block")}</p>
      </div>
      <div className="students">
        <StudentInLiveRoom />
        <StudentInLiveRoom />
        <StudentInLiveRoom />
        <StudentInLiveRoom />
        <StudentInLiveRoom />
        <StudentInLiveRoom />
      </div>
    </div>
  );
};

export default InLivesRooms;
