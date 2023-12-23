"use client";
import React from "react";
import "../courses.css";
import CourseLesson from "@/app/components/course-lesson/CourseLesson";
import "./single-course.css";

const SingleCourse = ({ course }) => {
  const { lessons } = course[0] || {};
  console.log(course);
  console.log("--------------lessons from SingleCourse", lessons);
  return (
    <main className="single-course-container">
      <p className="titre">
        <span>Courses/</span>Course details
      </p>
      <div className="course-lessons">
        {lessons?.map((lesson) => {
          return <CourseLesson key={lesson.id} lesson={lesson} />;
        })}
      </div>
    </main>
  );
};

export default SingleCourse;
