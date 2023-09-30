import Image from "next/image";
import "./open-live-room.css";

const OpenLiveRoom = ({ icon, text }) => {
  return (
    <div className="open-new hover">
      <Image src={icon} alt="Picture of the author" width={50} height={50} />
      <p>{text}</p>
    </div>
  );
};

export default OpenLiveRoom;
