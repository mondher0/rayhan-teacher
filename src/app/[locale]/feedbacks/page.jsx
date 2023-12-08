import { getCoursesComments, getProfileComments } from "./actions";
import "./feedbacks.css";
import FeedBackTypes from "@/app/components/feed-back-types/FeedBackTypes";

const FeedbacksPage = async () => {
  const coursesCommentsData = getCoursesComments(1);
  const profileCommentsData = getProfileComments(1);
  const [coursesComments, profileComments] = await Promise.all([
    coursesCommentsData,
    profileCommentsData,
  ]);
  console.log(
    "----------------from profile comments--------------------",
    profileComments,
  );
  return (
    <main>
      <FeedBackTypes
        coursesComments={coursesComments?.data?.data}
        profileComments={profileComments?.data?.data}
      />
    </main>
  );
};

export default FeedbacksPage;
