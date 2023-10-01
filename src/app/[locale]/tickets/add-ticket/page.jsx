"use client";
import { useLocale, useTranslations } from "next-intl";
import "./add-ticket.css";

const AddTicketPage = () => {
  const t = useTranslations("Index");
  const locale = useLocale();
  return (
    <main>
      <div className="add-ticket">
        <form>
          <div className="form-control">
            <div className="input-control">
              <label htmlFor="object">{t("ticketSubject")}</label>
              <input type="text" name="object" id="object" />
            </div>
            <div className="input-control">
              <label htmlFor="service">{t("service")}</label>
              <select name="service" id="service">
                <option value="1">Service 1</option>
                <option value="2">Service 2</option>
                <option value="3">Service 3</option>
                <option value="4">Service 4</option>
              </select>
            </div>
            <div className="input-control">
              <label htmlFor="importance">{t("importance")}</label>
              <select name="importance" id="importance">
                <option value="1">Service 1</option>
                <option value="2">Service 2</option>
                <option value="3">Service 3</option>
                <option value="4">Service 4</option>
              </select>
            </div>
          </div>
          <div className="input-control">
            <label htmlFor="message">{t("message")}</label>
            <textarea id="message" cols={40} rows={10}></textarea>
          </div>
          <div
            className={
              locale === "ar"
                ? "btn-container-ar btn-container"
                : "btn-container"
            }
          >
            <button className="btn">{t("send")}</button>
          </div>
        </form>
      </div>
    </main>
  );
};

export default AddTicketPage;
