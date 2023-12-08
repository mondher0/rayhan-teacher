"use server";

const { baseUrl } = require("@/utils/constants");
const { getToken } = require("@/utils/lib");

export const getCoursesComments = async (page) => {
  try {
    const token = getToken();
    const response = await fetch(
      `${baseUrl}/teacher/comment/course/get?paginate=true&page=${page}`,
      {
        cache: "no-cache",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );
    const coursesComments = await response.json();
    return coursesComments;
  } catch (error) {
    console.log("--------------------from  courses comments", error);
    throw new Error(error);
  }
};
