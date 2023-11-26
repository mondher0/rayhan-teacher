"use client";
import "./table-component.css";
import design from "../../atoms/assets/design.png";
import Image from "next/image";
import { useTranslations } from "next-intl";

const TableComponent = ({ courses }) => {
  const t = useTranslations("Index");
  console.log("--------------courses from TableComponent", courses);
  return (
    <table className="table">
      <thead>
        <tr>
          <th>{t("course")}</th>
          <th>{t("destination")}</th>
          <th>{t("price")}</th>
          <th>{t("date")}</th>
        </tr>
      </thead>
      <tbody>
        {courses?.map((course) => {
          const dateObj = new Date(course?.updated_at);

          // Format the Date object to the desired format
          const formattedDate = `${("0" + dateObj.getDate()).slice(-2)}/${(
            "0" +
            (dateObj.getMonth() + 1)
          ).slice(-2)}/${dateObj.getFullYear().toString().slice(-2)}`;
          const formattedTime = `${("0" + dateObj.getHours()).slice(-2)}:${(
            "0" + dateObj.getMinutes()
          ).slice(-2)}`;
          return (
            <tr key={course.id}>
              <td>
                <div className="course-title">{course?.title}</div>
              </td>
              <td>{course?.destination}</td>
              <td>
                {course?.price}
                {t("dzd")}
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

export default TableComponent;
