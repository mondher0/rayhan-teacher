import { useTranslations } from "next-intl";
import "../notifications-container/notifications-container.css";
import SingleReview from "../single-review/SingleReview";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { getProfileComments } from "@/app/[locale]/feedbacks/actions";
import Loader from "../loader/Loader";

const Reviews = ({ profileComments }) => {
  const t = useTranslations("Index");
  console.log(profileComments);
  const [comments, setComments] = useState(profileComments);
  const [page, setPage] = useState(1);
  const [ref, inView] = useInView();
  const [finish, setFinish] = useState();

  // load more courses comments
  const loadMoreCoursesComments = async () => {
    const next = page + 1;
    const data = await getProfileComments(next);
    const comments = await data?.data.data;
    console.log("mondher", comments);
    if (comments?.length) {
      console.log("good");
      setPage(next);
      setComments((prev) => [...(prev?.length ? prev : []), ...comments]);
    } else {
      setFinish(true);
    }
  };

  useEffect(() => {
    if (inView) {
      loadMoreCoursesComments();
    }
  }, [inView]);
  return (
    <div className="notification-container">
      <p className="notificatins-title">{t("reviews")}</p>
      {comments?.map((profileComment) => {
        return (
          <SingleReview
            review="from AYA ABDELBASSET in Javascript course"
            numberOfStars={5}
            key={profileComment?.id}
          />
        );
      })}
      {!finish ? (
        <div className="loader-con" ref={ref}>
          <Loader />
        </div>
      ) : null}
    </div>
  );
};

export default Reviews;
