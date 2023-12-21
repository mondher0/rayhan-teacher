import { useTranslations } from "next-intl";
import students from "../atoms/assets/students.svg";
import balancee from "../atoms/assets/balance.svg";
import StatistiqueContainer from "../components/statistique-container/StatistiqueContainer";
import "./dashboard.css";
import StudentsNumberChart from "../components/students-number-chart/StudentsNumberChart";
import StudentsBySex from "../components/students-by-sex/StudentsBySex";
import clock from "../atoms/assets/clock.svg";
import cup from "../atoms/assets/cup.svg";
import SailedCourse from "../components/sailed-course/SailedCourse";

const Dashboard = ({ userInfo }) => {
  const t = useTranslations("Index");
  const { userable } = userInfo || {};
  const { balance } = userable || {};
  return (
    <main>
      <div className="statistiques">
        <StatistiqueContainer
          stat1={students}
          number="62"
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
          <StudentsNumberChart />
          <p className="top">Top sailed courses</p>
          <div className="statistiques">
            <SailedCourse />
            <SailedCourse />
          </div>
        </div>
        <StudentsBySex />
      </section>
    </main>
  );
};

export default Dashboard;
