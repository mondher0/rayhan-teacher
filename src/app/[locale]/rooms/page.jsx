import OpenLiveRoom from "@/app/components/open-live-room/OpenLiveRoom";
import "../lives/lives.css";
import InLivesRooms from "@/app/components/in-lives-rooms/InLivesRooms";
import AverageMarks from "@/app/components/average-marks/AverageMarks";
import openRoom from "../../atoms/assets/open-room.svg";
import { useTranslations } from "next-intl";

const RoomsPage = () => {
  const t = useTranslations("Index");
  return (
    <main>
      <OpenLiveRoom icon={openRoom} text={t("openNewRoom")} />
      <section className="lives">
        <InLivesRooms text={t("inRoomNow")} />
        <AverageMarks
          text1={t("participants")}
          text2={t("acceptALl")}
          type="lives-rooms"
        />
      </section>
    </main>
  );
};

export default RoomsPage;
