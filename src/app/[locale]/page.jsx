import { getUserInfo } from "@/utils/lib";
import Dashboard from "./Dashboard";

export default async function DashboardPage() {
  const userInfo = await getUserInfo();
  console.log("--------------userInfo from DashboardPage", userInfo);
  return <Dashboard userInfo={userInfo} />;
}
