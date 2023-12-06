"use client";
import { useLocale, useTranslations } from "next-intl";
import "./add-ticket.css";
import axiosInstance, { baseUrl } from "@/utils/constants";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loader from "@/app/components/loader/Loader";

const AddTicketPage = () => {
  const t = useTranslations("Index");
  const locale = useLocale();
  const [services, setServices] = useState([]);
  const [subject, setSubject] = useState("");
  const [content, setContent] = useState("");
  const [service, setService] = useState("");
  const [importance, setImportance] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // get services
  const getService = async () => {
    try {
      const response = await axiosInstance.get(`${baseUrl}/ticket/services`);
      console.log(response);
      setServices(response?.data?.data);
    } catch (error) {
      console.log(error);
    }
  };

  // add ticket
  const addTicket = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await axiosInstance.post(`${baseUrl}/ticket/store`, {
        subject,
        content,
        service,
        importance,
      });
      console.log(response);
      setIsLoading(false);
      toast.success("Ticket added successfully");
    } catch (error) {
      console.log(error);
      setIsLoading(false);
      toast.error("Something went wrong");
    }
  };

  useEffect(() => {
    getService();
  }, []);
  return (
    <main>
      <ToastContainer />
      <div className="add-ticket">
        <form onSubmit={addTicket}>
          <div className="form-control">
            <div className="input-control">
              <label htmlFor="object">{t("ticketSubject")}</label>
              <input
                type="text"
                name="object"
                id="object"
                onChange={(e) => setSubject(e.target.value)}
              />
            </div>
            <div className="input-control">
              <label htmlFor="service">{t("service")}</label>
              <select
                name="service"
                id="service"
                onChange={(e) => setService(e.target.value)}
              >
                <option>Choose servise</option>
                {services.map((service) => (
                  <option key={service} value={service}>
                    {service}
                  </option>
                ))}
              </select>
            </div>
            <div className="input-control">
              <label htmlFor="importance">{t("importance")}</label>
              <input
                type="text"
                name="importance"
                id="importance"
                onChange={(e) => setImportance(e.target.value)}
              />
            </div>
          </div>
          <div className="input-control">
            <label htmlFor="message">{t("message")}</label>
            <textarea
              id="message"
              cols={40}
              rows={10}
              onChange={(e) => setContent(e.target.value)}
            ></textarea>
          </div>
          <div
            className={
              locale === "ar"
                ? "btn-container-ar btn-container"
                : "btn-container"
            }
          >
            <button className="btn">
              {isLoading ? <Loader /> : t("send")}
            </button>
          </div>
        </form>
      </div>
    </main>
  );
};

export default AddTicketPage;
