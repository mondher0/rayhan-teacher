import OpenLiveRoom from "@/app/components/open-live-room/OpenLiveRoom";
import "../lives/lives.css";
import InLivesRooms from "@/app/components/in-lives-rooms/InLivesRooms";
import AverageMarks from "@/app/components/average-marks/AverageMarks";
import openRoom from "../../atoms/assets/open-room.svg";

const RoomsPage = () => {
  return (
    <main>
      <OpenLiveRoom icon={openRoom} text="Open a Room Now" />
      <section className="lives">
        <InLivesRooms text="In Room now" />
        <AverageMarks
          text1="Participants"
          text2="Approve all"
          type="lives-rooms"
        />
      </section>
    </main>
  );
};

export default RoomsPage;
