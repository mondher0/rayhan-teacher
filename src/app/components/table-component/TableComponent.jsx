import "./table-component.css";
import design from "../../atoms/assets/design.png";
import Image from "next/image";
import { useTranslations } from "next-intl";

const TableComponent = () => {
  const t = useTranslations("Index");
  return (
    <table className="table">
      <thead>
        <tr>
          <th>{t("course")}</th>
          <th>{t("destination")}</th>
          <th>{t("price")}</th>
          <th>{t("date")}</th>
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
          <td>11000{t("dzd")}</td>
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
          <td>11000{t("dzd")}</td>
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
          <td>11000{t("dzd")}</td>
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
          <td>11000{t("dzd")}</td>
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
          <td>11000{t("dzd")}</td>
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
          <td>11000{t("dzd")}</td>
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
