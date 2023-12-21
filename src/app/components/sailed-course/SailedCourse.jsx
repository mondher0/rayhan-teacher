import Image from "next/image";
import "./sailed-course.css";
import { IoStarSharp } from "react-icons/io5";

const SailedCourse = () => {
  return (
    <div className="statistique-container-course">
      <Image
        src="/images/course-test.png"
        width={123}
        height={123}
        alt="course"
      />
      <div className="stat-desc">
        <p className="stat-number-course">Advanced course of Photoshop! </p>
        <div className="course-rating">
          <div className="stars">
            <IoStarSharp color="#FFA927" size={14} />
            <IoStarSharp color="#FFA927" size={14} />
            <IoStarSharp color="#FFA927" size={14} />
            <IoStarSharp color="#FFA927" size={14} />
            <IoStarSharp color="#FFA927" size={14} />
          </div>
          <div className="price">1200DA</div>
        </div>
      </div>
    </div>
  );
};

export default SailedCourse;
