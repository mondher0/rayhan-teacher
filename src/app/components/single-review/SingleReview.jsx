import "./single-review.css";
import "../single-notification/single-notification.css";
import { AiFillStar } from "react-icons/ai";
import Image from "next/image";
import reviewIcon from "../../atoms/assets/review-icon.svg";

const SingleReview = ({ review }) => {
  const { content, stars } = review || {};
  const numberOfStars = Array(parseInt(stars) || 0).fill(0);
  return (
    <div className="single-notification">
      <div className="not-text">
        <Image
          src={reviewIcon}
          alt="notification icon"
          width={30}
          height={30}
        />
        <p className="not">{content}</p>
      </div>
      <div className="stars">
        {numberOfStars.map((index) => (
          <AiFillStar size={30} color="#FFD700" key={index} />
        ))}
      </div>
    </div>
  );
};

export default SingleReview;
