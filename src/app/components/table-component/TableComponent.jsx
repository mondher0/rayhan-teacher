"use client";
import "./table-component.css";
import design from "../../atoms/assets/design.png";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { getLocalDate } from "@/utils/constants";

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
          const { formattedDate, formattedTime } = getLocalDate(
            course?.updated_at,
          );
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
