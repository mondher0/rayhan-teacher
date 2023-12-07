import "./tickets.css";
import Pagination from "@/app/components/pagination/Pagination";
import TicketsContainer from "@/app/components/tickets-container/TicketsContainer";
import { baseUrl } from "@/utils/constants";
import { getToken } from "@/utils/lib";

const TicketsPage = async ({ searchParams }) => {
  const { page } = searchParams;

  // get tickets from api
  const getTickets = async () => {
    try {
      const token = getToken();
      const response = await fetch(
        `${baseUrl}/ticket/get?paginate=true&page=${page}`,
        {
          cache: "no-cache",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      const tickets = await response.json();
      console.log(
        "---------------------- response from tickets--------------------",
        tickets,
      );
      return tickets.data;
    } catch (error) {
      console.log(error);
      throw new Error(error);
    }
  };

  const tickets = await getTickets();
  console.log("----------------------from tikcets", tickets);

  return (
    <main>
      <TicketsContainer tickets={tickets?.data} />
      <section className="pagination-bar">
        <Pagination
          currentPage={page}
          url="/tickets"
          totalPage={tickets?.last_page}
        />
      </section>
    </main>
  );
};

export default TicketsPage;
