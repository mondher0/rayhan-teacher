import Image from "next/image";
import "./single-average-mark.css";
import avatar from "./avatar.svg";

const SingleAverageMark = () => {
  return (
    <div className="single-average-mark">
      <div className="student-info">
        <Image
          src={avatar}
          alt="Picture of the author"
          width={50}
          height={50}
        />
        Annette Watson
      </div>
      <div className="average-mark">6.8</div>
    </div>
  );
};

export default SingleAverageMark;
