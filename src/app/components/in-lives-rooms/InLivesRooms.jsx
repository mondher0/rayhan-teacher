import StudentInLiveRoom from "../student-in-live-rom/StudentInLiveRoom";
import "./in-lives-rooms.css";

const InLivesRooms = ({ text }) => {
  return (
    <div className="in-live-room">
      <div className="in-live-room-title">
        <p className="text">{text}</p>
        <p className="block">Block</p>
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
