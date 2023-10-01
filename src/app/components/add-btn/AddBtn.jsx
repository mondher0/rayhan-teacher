"use client";
import "./add-btn.css";
import plus from "../../atoms/assets/plus.svg";
import Image from "next/image";
import { useRouter } from "next/navigation";

const AddBtn = () => {
  const router = useRouter();
  return (
    <div className="add-btn">
      <button className="btn hover">
        <Image src={plus} width={20} height={20} alt="plus" />
        nouveau ticket
      </button>
    </div>
  );
};

export default AddBtn;
