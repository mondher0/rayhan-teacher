"use client";
import "./table-component.css";
import { useTranslations } from "next-intl";
import { getLocalDate } from "@/utils/constants";
import { useRouter } from "next/navigation";

const TableComponent = ({ courses }) => {
  const t = useTranslations("Index");
  console.log("--------------courses from TableComponent", courses);
  const router = useRouter();
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
            <tr
              className="hover"
              key={course.id}
              onClick={() => {
                router.push(`/courses/${course?.id}`);
              }}
            >
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
