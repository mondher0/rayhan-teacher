import Image from "next/image";
import "./course-lesson.css";
import lessonVideo from "./lesson-video.svg";
import lessonQuiz from "./lesson-quiz.svg";

const CourseLesson = ({ lesson }) => {
  const { title, type } = lesson || {};
  return (
    <div className="course-lesson">
      <Image
        src={type === "attachment" ? lessonVideo : lessonQuiz}
        width={80}
        height={80}
        alt=""
      />
      <span>
        <p className="title">{title}</p>
        <p className="content-details">{type}</p>
      </span>
    </div>
  );
};

export default CourseLesson;
