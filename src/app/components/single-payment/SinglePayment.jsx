import Image from "next/image";
import moneyIcon from "../../atoms/assets/money-icon.svg";
import "./single-payment.css";
import { useTranslations } from "next-intl";

const SinglePayment = () => {
  const t = useTranslations("Index");
  return (
    <div className="single">
      <div className="single-payment">
        <div className="money">
          <Image src={moneyIcon} alt="money icon" width={50} height={50} />
          <p>
            39,500 <span>{t("dzd")}</span>
          </p>
        </div>
        <div className="date">
          <p>10/03/2023</p>
          <p>19:30</p>
        </div>
      </div>
    </div>
  );
};

export default SinglePayment;
