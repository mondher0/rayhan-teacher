import { getCoursesComments } from "./actions";
import "./feedbacks.css";
import FeedBackTypes from "@/app/components/feed-back-types/FeedBackTypes";

const FeedbacksPage = async () => {
  const coursesComments = await getCoursesComments(1);
  console.log("helloooooooo");
  console.log(
    "------------------courses comments---------------------",
    coursesComments,
  );
  return (
    <main>
      <FeedBackTypes coursesComments={coursesComments?.data?.data} />
    </main>
  );
};

export default FeedbacksPage;
