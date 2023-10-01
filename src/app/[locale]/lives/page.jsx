import OpenLiveRoom from "@/app/components/open-live-room/OpenLiveRoom";
import "./lives.css";
import openLive from "../../atoms/assets/open-live.svg";
import InLivesRooms from "@/app/components/in-lives-rooms/InLivesRooms";
import AverageMarks from "@/app/components/average-marks/AverageMarks";
import { useTranslations } from "next-intl";
const LivesPage = () => {
  const t = useTranslations("Index");
  return (
    <main>
      <OpenLiveRoom icon={openLive} text={t("openLiveNow")} />
      <section className="lives">
        <InLivesRooms text={t("inLivesNow")} />
        <AverageMarks
          text1={t("participants")}
          text2={t("acceptALl")}
          type="lives-rooms"
        />
      </section>
    </main>
  );
};

export default LivesPage;
