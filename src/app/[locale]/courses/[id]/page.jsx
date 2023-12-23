import React from "react";
import SingleCourse from "./SingleCourse";
import { baseUrl } from "@/utils/constants";
import { getToken } from "@/utils/lib";

const SingleCoursePage = async ({ params }) => {
  const { id } = params;

  // get course by id
  const getSingleCourse = async () => {
    try {
      const token = getToken();
      const response = await fetch(`${baseUrl}/teacher/course/get/${id}`, {
        cache: "no-cache",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const course = await response.json();
      console.log("--------------courses from getCourse", course);
      return course?.data;
    } catch (error) {
      console.log(error);
      throw new Error(error);
    }
  };

  const course = await getSingleCourse();
  console.log("--------------course from SingleCoursePage", course);
  return <SingleCourse course={course}/>;
};

export default SingleCoursePage;
