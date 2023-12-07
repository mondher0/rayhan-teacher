import TicketsDetailsContainer from "@/app/components/tickets-details/TicketsDetailsContainer";
import { baseUrl } from "@/utils/constants";
import { getToken } from "@/utils/lib";

const TicketsDetailsPage = async ({ params }) => {
  const { ticketsDetails } = params;
  console.log(ticketsDetails);

  // get single ticket details from api
  const getSingeTicketDetails = async () => {
    try {
      const token = getToken();
      console.log("------------------------this is ticket id", ticketsDetails);
      const response = await fetch(`${baseUrl}/ticket/get/${ticketsDetails}`, {
        cache: "no-cache",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const ticket = await response.json();
      console.log("-----------------this ticket----------------", ticket);
      return ticket;
    } catch (error) {
      console.log(
        "-------------------error from ticket---------------------",
        error,
      );
      throw new Error(error);
    }
  };

  const ticket = await getSingeTicketDetails();
  return <TicketsDetailsContainer ticket={ticket?.data} />;
};

export default TicketsDetailsPage;
