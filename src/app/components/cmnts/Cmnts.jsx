"use client";
import { useTranslations } from "next-intl";
import "../notifications-container/notifications-container.css";
import SingleCmnt from "../single-cmnt/SingleCmnt";
import { useEffect, useState } from "react";
import Loader from "../loader/Loader";
import { useInView } from "react-intersection-observer";
import { getCoursesComments } from "@/app/[locale]/feedbacks/actions";

const Cmnts = ({ coursesComments }) => {
  const t = useTranslations("Index");
  console.log(coursesComments);
  const [comments, setComments] = useState(coursesComments);
  const [page, setPage] = useState(1);
  const [ref, inView] = useInView();
  const [finish, setFinish] = useState();

  // load more courses comments
  const loadMoreCoursesComments = async () => {
    const next = page + 1;
    const data = await getCoursesComments(next);
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
      <p className="notificatins-title">{t("comments")}</p>
      {comments?.map((courseComment) => {
        return (
          <SingleCmnt
            time={t("twoMinutesAgo")}
            key={courseComment?.id}
            courseComment={courseComment}
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

export default Cmnts;
