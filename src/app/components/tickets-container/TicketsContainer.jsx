import React from "react";
import AddBtn from "../add-btn/AddBtn";
import TicketsTable from "../tickets-table/TicketsTable";
import AddTicketModal from "../add-ticket-modal/AddTicketModal";

const TicketsContainer = ({tickets}) => {
  return (
    <>
      <AddBtn />
      <TicketsTable tickets={tickets} />
    </>
  );
};

export default TicketsContainer;
