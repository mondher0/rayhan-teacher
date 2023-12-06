import { getLocalDate } from "@/utils/constants";
import "../table-component/table-component.css";
import "./tickets-table.css";
import { useTranslations } from "next-intl";

const TicketsTable = ({ tickets }) => {
  const t = useTranslations("Index");
  return (
    <table className="table">
      <thead>
        <tr>
          <th>{t("ticket")}</th>
          <th>{t("subject")}</th>
          <th>{t("status")}</th>
          <th>{t("lastUpdate")}</th>
        </tr>
      </thead>
      <tbody>
        {tickets?.map((ticket) => {
          const { formattedDate, formattedTime } = getLocalDate(
            ticket?.updated_at,
          );
          return (
            <tr key={ticket?.id}>
              <td>
                <div className="course-title">Admin</div>
              </td>
              <td>
                <div className="objet">
                  <p className="text">{ticket?.subject}</p>
                  <p className="type">{ticket?.importance}</p>
                </div>
              </td>
              <td>
                <div className="status">{ticket?.status}</div>
              </td>
              <td>
                <div className="date">
                  <p>{formattedDate}</p>
                  <p>{formattedTime}</p>
                </div>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default TicketsTable;
