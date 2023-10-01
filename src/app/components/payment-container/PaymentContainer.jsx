import { useTranslations } from "next-intl";
import SinglePayment from "../single-payment/SinglePayment";
import "./payment-container.css";

const PaymentContainer = () => {
  const t = useTranslations("Index");
  return (
    <div className="payment-container">
      <div className="payment-title">
        <p>{t("payments")}</p>
        <p>{t("date")}</p>
      </div>
      <div className="payment-data">
        <SinglePayment />
        <SinglePayment />
        <SinglePayment />
        <SinglePayment />
        <SinglePayment />
        <SinglePayment />
      </div>
    </div>
  );
};

export default PaymentContainer;
