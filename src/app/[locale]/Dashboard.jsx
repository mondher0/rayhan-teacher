"use client";
import { useTranslations } from "next-intl";
import studentss from "../atoms/assets/students.svg";
import balancee from "../atoms/assets/balance.svg";
import StatistiqueContainer from "../components/statistique-container/StatistiqueContainer";
import "./dashboard.css";
import StudentsNumberChart from "../components/students-number-chart/StudentsNumberChart";
import StudentsBySex from "../components/students-by-sex/StudentsBySex";
import SailedCourse from "../components/sailed-course/SailedCourse";

const Dashboard = ({ generalStat, charts, topSailedCourses }) => {
  const t = useTranslations("Index");
  const { balance, students } = generalStat || {};
  const { incomes } = charts || {};
  console.log("--------------generalStat from Dashboard", generalStat);
  console.log("--------------charts from Dashboard", incomes);
  return (
    <main>
      <div className="statistiques">
        <StatistiqueContainer
          stat1={studentss}
          number={students}
          text={t("Students")}
        />
        <StatistiqueContainer
          stat1={balancee}
          number={balance + "DA"}
          text={t("balance")}
        />
      </div>
      <section className="charts">
        <div className="students-number">
          <StudentsNumberChart incomes={incomes} />
          <p className="top">Top sailed courses</p>
          <div className="statistiques">
            {topSailedCourses?.slice(0, 2).map((course, index) => (
              <SailedCourse key={index} course={course} />
            ))}
          </div>
        </div>
        <StudentsBySex />
      </section>
    </main>
  );
};

export default Dashboard;
