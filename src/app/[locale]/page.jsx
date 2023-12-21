import { getToken } from "@/utils/lib";
import Dashboard from "./Dashboard";
import { baseUrl } from "@/utils/constants";

export default async function DashboardPage() {
  // get genral stat
  const getGeneralStat = async () => {
    try {
      const token = getToken();
      if (!token) return null;
      const response = await fetch(`${baseUrl}/stats/teacher/get/general`, {
        cache: "no-cache",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const generalInfo = await response.json();
      console.log(
        "--------------genral stat  from getGeneralStat",
        generalInfo,
      );
      return generalInfo?.data;
    } catch (error) {
      console.log("--------------error from getGeneralStat", error);
      throw new Error(error);
    }
  };

  // get charts data
  const getChartsData = async () => {
    try {
      const token = getToken();
      if (!token) return null;
      const currentYear = new Date().getFullYear();
      console.log("--------------currentYear from getChartsData", currentYear);
      const response = await fetch(
        `${baseUrl}/stats/teacher/get/chart?year=2023`,
        {
          cache: "no-cache",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      const chartsData = await response.json();
      console.log("--------------chartsData from getChartsData", chartsData);
      return chartsData?.data;
    } catch (error) {
      console.log("--------------error from getChartsData", error);
      throw new Error(error);
    }
  };

  // get top sailed courses
  const getTopSailedCourses = async () => {
    try {
      const token = getToken();
      if (!token) return null;
      const response = await fetch(`${baseUrl}/teacher/course/top-sailed`, {
        cache: "no-cache",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const topSailedCourses = await response.json();
      console.log(
        "--------------topSailedCourses from getTopSailedCourses",
        topSailedCourses,
      );
      return topSailedCourses?.data;
    } catch (error) {
      console.log("--------------error from getTopSailedCourses", error);
      throw new Error(error);
    }
  };

  const generalStatData = getGeneralStat();
  const chartsData = getChartsData();
  const topSailedCoursesData = getTopSailedCourses();
  const [generalStat, charts, topSailedCourses] = await Promise.all([
    generalStatData,
    chartsData,
    topSailedCoursesData,
  ]);
  console.log("--------------generalStat from DashboardPage", generalStat);
  console.log("--------------charts from DashboardPage", charts);
  console.log(
    "--------------topSailedCourses from DashboardPage",
    topSailedCourses,
  );
  return (
    <Dashboard
      generalStat={generalStat}
      charts={charts}
      topSailedCourses={topSailedCourses?.data}
    />
  );
}
