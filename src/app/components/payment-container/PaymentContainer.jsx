import SinglePayment from "../single-payment/SinglePayment";
import "./payment-container.css";

const PaymentContainer = () => {
  return (
    <div className="payment-container">
      <div className="payment-title">
        <p>Payement</p>
        <p>Date</p>
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
