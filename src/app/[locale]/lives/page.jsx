import OpenLiveRoom from "@/app/components/open-live-room/OpenLiveRoom";
import "./lives.css";
import openLive from "../../atoms/assets/open-live.svg";
import InLivesRooms from "@/app/components/in-lives-rooms/InLivesRooms";
import AverageMarks from "@/app/components/average-marks/AverageMarks";
const LivesPage = () => {
  return (
    <main>
      <OpenLiveRoom icon={openLive} text="Open a live Now" />
      <section className="lives">
        <InLivesRooms text="In live now" />
        <AverageMarks
          text1="Participants"
          text2="Approve all"
          type="lives-rooms"
        />
      </section>
    </main>
  );
};

export default LivesPage;
