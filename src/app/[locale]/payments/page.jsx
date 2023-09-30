import Pagination from "@/app/components/pagination/Pagination";
import PaymentContainer from "@/app/components/payment-container/PaymentContainer";
import "./payments.css";

const PaymenPage = ({ searchParams }) => {
  const { page } = searchParams;
  console.log("-----------this is page --------------------", page);
  return (
    <main>
      <PaymentContainer />
      <section className="pagination-bar">
        <Pagination currentPage={page} url="/payments" />
      </section>
    </main>
  );
};

export default PaymenPage;
