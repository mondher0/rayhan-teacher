import "./student-in-live-rom.css";
import avatar from "./avatar.svg";
import Image from "next/image";

const StudentInLiveRoom = () => {
  return (
    <div className="student-in-live-room">
      <Image src={avatar} alt="Picture of the author" width={50} height={50} />
      <p>Annette Watson</p>
    </div>
  );
};

export default StudentInLiveRoom;
