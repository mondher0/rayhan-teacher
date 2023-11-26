import ProfileContainer from "@/app/components/profile-container/ProfileContainer";
import { getUserInfo } from "@/utils/lib";

const ProfilePage = async () => {
  const userInfo = await getUserInfo();
  return (
    <main>
      <ProfileContainer userInfo={userInfo} />
    </main>
  );
};

export default ProfilePage;
