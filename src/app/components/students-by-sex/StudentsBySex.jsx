import { useTranslations } from "next-intl";
import DoughnutChart from "../doughnut-chart/DoughnutChart";
import "./student-by-sex.css";
import React from "react";

const StudentsBySex = () => {
  const t = useTranslations("Index");
  return (
    <div className="student-by-sex">
      <p className="student-by-sex-title">{t("studentBySex")}</p>
      <DoughnutChart />
      <div className="student-by-sex-desc">
        <div className="girls">
          <div className="color-girls">
            <div></div>
            {t("Groups of girls students")}
          </div>
          <span>20(20%)</span>
        </div>
        <div className="boys">
          <div className="color-boys">
            <div></div>
            {t("Groups of boys students")}
          </div>
          <span>80(80%)</span>
        </div>
      </div>
    </div>
  );
};

export default StudentsBySex;
