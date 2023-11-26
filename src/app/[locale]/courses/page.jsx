import TableComponent from "@/app/components/table-component/TableComponent";
import "./courses.css";
import Pagination from "@/app/components/pagination/Pagination";
import { getToken } from "@/utils/lib";
import { baseUrl } from "@/utils/constants";

const CoursesPage = async ({ searchParams }) => {
  const { page } = searchParams;
  // get courses from api
  const getCourses = async () => {
    const token = getToken();
    try {
      const response = await fetch(
        `${baseUrl}/teacher/course/get?paginate=true&page=${page}`,
        {
          cache: "no-cache",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const courses = await response.json();
      console.log("--------------courses from getCourses", courses);
      return courses?.data;
    } catch (error) {
      console.log("--------------error from getCourses", error);
      throw new Error(error);
    }
  };
  const courses = await getCourses();
  console.log("--------------courses from CoursesPage", courses);

  return (
    <main>
      <TableComponent courses={courses?.data} />
      <section className="pagination-bar">
        <Pagination
          currentPage={page}
          url="/courses"
          totalPage={courses?.meta?.last_page}
        />
      </section>
    </main>
  );
};

export default CoursesPage;
