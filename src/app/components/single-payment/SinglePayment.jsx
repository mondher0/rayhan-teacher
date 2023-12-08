import Image from "next/image";
import moneyIcon from "../../atoms/assets/money-icon.svg";
import "./single-payment.css";
import { useTranslations } from "next-intl";
import { getLocalDate } from "@/utils/constants";

const SinglePayment = ({ transaction }) => {
  const t = useTranslations("Index");
  const { amount, created_at } = transaction || {};
  const { formattedDate, formattedTime } = getLocalDate(created_at);
  return (
    <div className="single">
      <div className="single-payment">
        <div className="money">
          <Image src={moneyIcon} alt="money icon" width={50} height={50} />
          <p>
            {amount} <span>{t("dzd")}</span>
          </p>
        </div>
        <div className="date">
          <p>{formattedDate}</p>
          <p>{formattedTime}</p>
        </div>
      </div>
    </div>
  );
};

export default SinglePayment;
