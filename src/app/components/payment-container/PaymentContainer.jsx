"use client";
import { useTranslations } from "next-intl";
import SinglePayment from "../single-payment/SinglePayment";
import "./payment-container.css";

const PaymentContainer = ({ transactions }) => {
  console.log(transactions);
  const t = useTranslations("Index");
  return (
    <div className="payment-container">
      <div className="payment-title">
        <p>{t("payments")}</p>
        <p>{t("date")}</p>
      </div>
      <div className="payment-data">
        {transactions?.map((transaction) => {
          const { id } = transaction || {};
          return <SinglePayment key={id} transaction={transaction} />;
        })}
      </div>
    </div>
  );
};

export default PaymentContainer;
