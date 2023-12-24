"use client";
import Image from "next/image";
import "./sailed-course.css";
import { IoStarSharp } from "react-icons/io5";

const SailedCourse = ({ course }) => {
  const { title, total_rate, comments_count } = course || {};
  console.log(total_rate);
  const numberofStars = Array(parseInt(total_rate) || 0).fill(0);
  console.log("--------------course from SailedCourse", course);
  return (
    <div className="statistique-container-course">
      <Image
        src="/images/course-test.png"
        width={123}
        height={100}
        alt="course"
        className="stat-img-course"
      />
      <div className="stat-desc">
        <p className="stat-number-course">{title}</p>
        <div className="course-rating">
          <div className="stars">
            {numberofStars.map((index) => (
              <IoStarSharp size={20} color="#FFD700" key={index} />
            ))}
            <p className="total-cmnts">({comments_count})</p>
          </div>
          <div className="price">1200DA</div>
        </div>
      </div>
    </div>
  );
};

export default SailedCourse;
