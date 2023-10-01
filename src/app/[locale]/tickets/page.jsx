import "./tickets.css";
import Pagination from "@/app/components/pagination/Pagination";
import TicketsContainer from "@/app/components/tickets-container/TicketsContainer";

const TicketsPage = ({ searchParams }) => {
  const { page } = searchParams;
  return (
    <main>
      <TicketsContainer />
      <section className="pagination-bar">
        <Pagination currentPage={page} url="/tickets" />
      </section>
    </main>
  );
};

export default TicketsPage;
