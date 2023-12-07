"use client";
import { FaArrowLeft } from "react-icons/fa";
import "./tickets-details.css";
import { IoIosClose } from "react-icons/io";
import { CgMailReply } from "react-icons/cg";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import axiosInstance, { baseUrl } from "@/utils/constants";
import { useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loader from "@/app/components/loader/Loader";
import ReplayModel from "./ReplayModel";

const TicketsDetailsNavBar = ({ id }) => {
  const router = useRouter();
  const [isLoading, setIsloading] = useState();
  const [open, setOpen] = useState(false);
  const onClose = () => setOpen(false);

  // close ticket
  const closeTicket = async () => {
    try {
      setIsloading(true);
      const response = await axiosInstance.post(
        `${baseUrl}/ticket/close/${id}`,
      );
      console.log(response);
      setIsloading(false);
      router.push("/tickets?page=1");
    } catch (error) {
      setIsloading(false);
      toast.error("Something went wrong");
    }
  };
  return (
    <>
      <ToastContainer />

      <div className="tickets-details-navbar">
        <div
          className="back-btn hover"
          onClick={() => router.push("/tickets?page=1")}
        >
          <FaArrowLeft />
        </div>
        <div className="features-btns">
          <button
            className="close hover"
            onClick={closeTicket}
            style={isLoading ? { padding: "3px 32px" } : {}}
          >
            {isLoading ? (
              <Loader size={20} />
            ) : (
              <>
                <IoIosClose size={20} /> Close{" "}
              </>
            )}
          </button>
          <button className="reply hover" onClick={() => setOpen(true)}>
            <CgMailReply size={20} />
            Reply
          </button>
        </div>
      </div>
      <ReplayModel open={open} onClose={onClose} id={id} />
    </>
  );
};

export default TicketsDetailsNavBar;
