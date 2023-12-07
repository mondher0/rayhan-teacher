"use client";
import React from "react";
import TicketsDetailsNavBar from "./TicketsDetailsNavBar";
import DiscussionContainer from "./DiscussionContainer";
import "./tickets-details.css";

const TicketsDetailsContainer = ({ ticket }) => {
  const { replies, id } = ticket || {};
  return (
    <div className="tickets-details-container">
      <TicketsDetailsNavBar id={id} />
      <div className="details">
        {replies.map((reply) => {
          const { created_at, content, id, replier } = reply || {};
          return (
            <DiscussionContainer
              key={id}
              date={created_at}
              content={content}
              replier={replier}
            />
          );
        })}
      </div>
    </div>
  );
};

export default TicketsDetailsContainer;
