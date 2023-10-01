"use client";
import "./add-btn.css";
import plus from "../../atoms/assets/plus.svg";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useTranslations } from "next-intl";

const AddBtn = () => {
  const router = useRouter();
  const t = useTranslations("Index");
  return (
    <div className="add-btn">
      <button
        className="btn hover"
        onClick={() => {
          router.push("tickets/add-ticket");
        }}
      >
        <Image src={plus} width={20} height={20} alt="plus" />
        {t("newTicket")}
      </button>
    </div>
  );
};

export default AddBtn;
