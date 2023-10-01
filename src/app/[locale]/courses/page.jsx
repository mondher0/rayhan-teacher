import TableComponent from "@/app/components/table-component/TableComponent";
import "./courses.css";
import Pagination from "@/app/components/pagination/Pagination";

const CoursesPage = ({ searchParams }) => {
  const { page } = searchParams;
  return (
    <main>
      <TableComponent />
      <section className="pagination-bar">
        <Pagination currentPage={page} url="/courses" />
      </section>
    </main>
  );
};

export default CoursesPage;
