import "./single-cmnt.css";
import "../single-notification/single-notification.css";
import smsNot from "../../atoms/assets/sms-not.svg";
import Image from "next/image";
import { getLocalDate } from "@/utils/constants";

const SingleCmnt = ({ time, courseComment }) => {
  const { content, created_at, student, commentable } = courseComment || {};
  const { formattedDate, formattedTime } = getLocalDate(created_at);
  const { user } = student || {};
  const { first_name, last_name } = user || {};
  const { title } = commentable || {};
  return (
    <div className="single-notification">
      <div className="not-text">
        <Image src={smsNot} alt="notification icon" width={30} height={30} />
        <div className="cmnt-details">
          <p className="cmnt-title">
            {first_name} {last_name} comments on your posts about {title}:
          </p>
          <p className="cmnt-content">“{content}”</p>
        </div>
      </div>
      <p className="not-time">
        {formattedDate} {formattedTime}
      </p>
    </div>
  );
};

export default SingleCmnt;
