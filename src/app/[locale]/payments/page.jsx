import Pagination from "@/app/components/pagination/Pagination";
import PaymentContainer from "@/app/components/payment-container/PaymentContainer";
import "./payments.css";
import { getToken } from "@/utils/lib";
import { baseUrl } from "@/utils/constants";

const PaymenPage = async ({ searchParams }) => {
  const { page } = searchParams;
  console.log("-----------this is page --------------------", page);

  // get transactions
  const getTransactions = async () => {
    const token = getToken();
    try {
      const response = await fetch(
        `${baseUrl}/teacher/transaction/get?paginate=true&page=${page}`,
        {
          cache: "no-cache",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      const transactions = await response.json();
      return transactions;
    } catch (error) {
      console.log(
        "-------------------error from transactions----------------",
        error,
      );
      throw new Error(error);
    }
  };

  const transactions = await getTransactions();
  console.log(
    "---------------------transactions-------------------------",
    transactions,
  );
  return (
    <main>
      <PaymentContainer transactions={transactions?.data?.data} />
      <section className="pagination-bar">
        <Pagination
          currentPage={page}
          url="/payments"
          totalPage={transactions?.data?.last_page}
        />
      </section>
    </main>
  );
};

export default PaymenPage;
