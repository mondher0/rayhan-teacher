import { useTranslations } from "next-intl";
import students from "../atoms/assets/students.svg";
import balancee from "../atoms/assets/balance.svg";
import StatistiqueContainer from "../components/statistique-container/StatistiqueContainer";
import "./dashboard.css";
import StudentsNumberChart from "../components/students-number-chart/StudentsNumberChart";
import AverageMarks from "../components/average-marks/AverageMarks";
import StudentsBySex from "../components/students-by-sex/StudentsBySex";
import clock from "../atoms/assets/clock.svg";
import cup from "../atoms/assets/cup.svg";

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
          <div className="statistiques">
            <StatistiqueContainer
              stat1={cup}
              number="62"
              text={t("lectionsLeft")}
            />
            <StatistiqueContainer
              stat1={clock}
              number="139"
              text={t("Hours spent on lections")}
            />
          </div>
        </div>
        <StudentsBySex />
      </section>
    </main>
  );
};

export default Dashboard;
