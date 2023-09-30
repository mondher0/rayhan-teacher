import { useTranslations } from "next-intl";
import Image from "next/image";
import students from "../atoms/assets/students.svg";
import balance from "../atoms/assets/balance.svg";
import averageMarks from "../atoms/assets/average-marks.svg";
import under from "../atoms/assets/under.svg";
import StatistiqueContainer from "../components/statistique-container/StatistiqueContainer";
import "./dashboard.css";
import StudentsNumberChart from "../components/students-number-chart/StudentsNumberChart";
import AverageMarks from "../components/average-marks/AverageMarks";
import StudentsBySex from "../components/students-by-sex/StudentsBySex";
import clock from "../atoms/assets/clock.svg";
import cup from "../atoms/assets/cup.svg";

export default function DashboardPage() {
  const t = useTranslations("Index");
  return (
    <main>
      <div className="statistiques">
        <StatistiqueContainer stat1={students} number="62" text="Students" />
        <StatistiqueContainer stat1={balance} number="24000DZ" text="balance" />
        <StatistiqueContainer
          stat1={averageMarks}
          number="6.8"
          text="Average mark "
        />
        <StatistiqueContainer
          stat1={under}
          number="8"
          text="Underperforming students "
        />
      </div>
      <section className="charts">
        <div className="students-number">
          <StudentsNumberChart />
          <div className="statistiques">
            <StatistiqueContainer
              stat1={cup}
              number="62"
              text="Lections left"
            />
            <StatistiqueContainer
              stat1={clock}
              number="139"
              text="Hours spent on lections "
            />
          </div>
        </div>
        <AverageMarks
          text1="average marks"
          text2="Descending"
          type="dashboard"
        />
        <StudentsBySex />
      </section>
    </main>
  );
}
