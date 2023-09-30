import "./single-cmnt.css";
import "../single-notification/single-notification.css";
import smsNot from "../../atoms/assets/sms-not.svg";
import Image from "next/image";

const SingleCmnt = ({time}) => {
  return (
    <div className="single-notification">
      <div className="not-text">
        <Image src={smsNot} alt="notification icon" width={30} height={30} />
        <div className="cmnt-details">
          <p className="cmnt-title">
            Selena comments on your posts about Algorithm tasks:
          </p>
          <p className="cmnt-content">
            “thi course is very interseting course i wish all the guys had fun
            and was all happy about what we got especially this year”
            
          </p>
        </div>
      </div>
      <p className="not-time">{time}</p>
    </div>
  );
};

export default SingleCmnt;
