import React from "react";
import avatar from "../nav-bar/avatar.svg";
import Image from "next/image";
import "./tickets-details.css";
import { getLocalDate } from "@/utils/constants";
import "./style.css";

const DiscussionContainer = ({ date, content, replier }) => {
  console.log("from replier", replier);
  const { formattedDate, formattedTime } = getLocalDate(date);
  const { user } = replier || {};
  console.log(
    "------------------this is user from DiscussionContainer",
    replier,
  );
  const { first_name, last_name } = user || {};
  content = { __html: content };
  return (
    <div className="discussion-container">
      <div className="header">
        <div className="content-header">
          <Image src={avatar} alt="avatar" width={40} height={40} />
          <p className="name">
            {first_name} {last_name}
          </p>
        </div>
        <div className="date">
          <p>
            {formattedDate} ({formattedTime})
          </p>
        </div>
      </div>
      <div
        className="content"
      >
        <p
          dangerouslySetInnerHTML={content}
          className="danger"
        ></p>
      </div>
    </div>
  );
};

export default DiscussionContainer;
