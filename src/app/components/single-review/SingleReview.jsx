import "./single-review.css";
import "../single-notification/single-notification.css";
import { AiFillStar } from "react-icons/ai";
import Image from "next/image";
import reviewIcon from "../../atoms/assets/review-icon.svg";

const SingleReview = ({ numberOfStars, review }) => {
  return (
    <div className="single-notification">
      <div className="not-text">
        <Image
          src={reviewIcon}
          alt="notification icon"
          width={30}
          height={30}
        />
        <p className="not">{review}</p>
      </div>
      <div className="stars">
        {Array(numberOfStars).fill(<AiFillStar color="#FFC107" size={30} />)}
      </div>
    </div>
  );
};

export default SingleReview;
