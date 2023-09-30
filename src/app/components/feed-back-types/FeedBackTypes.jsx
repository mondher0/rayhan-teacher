"use client";
import "./feed-back-types.css";
import cmnt from "../../atoms/assets/cmnt.svg";
import star from "../../atoms/assets/star.svg";
import { useState } from "react";
import "../open-live-room/open-live-room.css";
import Image from "next/image";
import Cmnts from "../cmnts/Cmnts";
import Reviews from "../reviews/Reviews";

const FeedBackTypes = () => {
  const [comments, setComments] = useState("selected");
  const [reviews, setReviews] = useState();
  const style1 = {
    background: "#FFF1CC",
  };
  const style2 = {
    background: "#E1CBFF",
  };

  // handle click
  const handleClick = (e) => {
    if (e === "Comments") {
      setComments("selected");
      setReviews("");
    } else {
      setComments("");
      setReviews("selected");
    }
  };
  return (
    <div className="all-feedbacks">
      <div className="feedback-types">
        <div
          className="open-new hover"
          onClick={() => handleClick("Comments")}
          style={comments ? style2 : {}}
        >
          <Image
            src={cmnt}
            alt="Picture of the author"
            width={50}
            height={50}
          />
          <p> Comments</p>
        </div>
        <div
          className="open-new hover"
          onClick={() => handleClick("Reviews")}
          style={reviews ? style1 : {}}
        >
          <Image
            src={star}
            alt="Picture of the author"
            width={50}
            height={50}
          />
          <p>Reviews</p>
        </div>
      </div>
      {comments && <Cmnts />}
      {reviews && <Reviews />}
    </div>
  );
};

export default FeedBackTypes;
