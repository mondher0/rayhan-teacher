import "./table-component.css";
import design from "../../atoms/assets/design.png";
import Image from "next/image";

const TableComponent = () => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Course</th>
          <th>Destination</th>
          <th>Pricing</th>
          <th>Date</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <div className="course-title">
              <Image src={design} width={50} height={50} />
              Product Design
            </div>
          </td>
          <td>Takwin</td>
          <td>11 000 DA</td>
          <td>
            <div className="date">
              <p>10/03/2023</p>
              <p>19:30</p>
            </div>
          </td>
        </tr>
        <tr>
          <td>
            <div className="course-title">
              <Image src={design} width={50} height={50} />
              Product Design
            </div>
          </td>
          <td>Takwin</td>
          <td>11 000 DA</td>
          <td>
            <div className="date">
              <p>10/03/2023</p>
              <p>19:30</p>
            </div>
          </td>
        </tr>
        <tr>
          <td>
            <div className="course-title">
              <Image src={design} width={50} height={50} />
              Product Design
            </div>
          </td>
          <td>Takwin</td>
          <td>11 000 DA</td>
          <td>
            <div className="date">
              <p>10/03/2023</p>
              <p>19:30</p>
            </div>
          </td>
        </tr>
        <tr>
          <td>
            <div className="course-title">
              <Image src={design} width={50} height={50} />
              Product Design
            </div>
          </td>
          <td>Takwin</td>
          <td>11 000 DA</td>
          <td>
            <div className="date">
              <p>10/03/2023</p>
              <p>19:30</p>
            </div>
          </td>
        </tr>
        <tr>
          <td>
            <div className="course-title">
              <Image src={design} width={50} height={50} />
              Product Design
            </div>
          </td>
          <td>Takwin</td>
          <td>11 000 DA</td>
          <td>
            <div className="date">
              <p>10/03/2023</p>
              <p>19:30</p>
            </div>
          </td>
        </tr>
        <tr>
          <td>
            <div className="course-title">
              <Image src={design} width={50} height={50} />
              Product Design
            </div>
          </td>
          <td>Takwin</td>
          <td>11 000 DA</td>
          <td>
            <div className="date">
              <p>10/03/2023</p>
              <p>19:30</p>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default TableComponent;
