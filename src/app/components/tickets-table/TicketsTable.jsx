import "../table-component/table-component.css";
import design from "../../atoms/assets/design.png";
import Image from "next/image";
import "./tickets-table.css";

const TicketsTable = () => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Billets</th>
          <th>Object de billet</th>
          <th>Statut</th>
          <th>DERNIÈRE MISE À JOUR</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <div className="course-title">
              <Image src={design} width={50} height={50} />
              Admin
            </div>
          </td>
          <td>
            <div className="objet">
              <p className="text">
                Reclamation about payement and every single student
              </p>
              <p className="type">urgent</p>
            </div>
          </td>
          <td>
            <div className="status">Fermé</div>
          </td>
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
              Admin
            </div>
          </td>
          <td>
            <div className="objet">
              <p className="text">
                Reclamation about payement and every single student
              </p>
              <p className="type">urgent</p>
            </div>
          </td>
          <td>
            <div className="status">Fermé</div>
          </td>
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
              Admin
            </div>
          </td>
          <td>
            <div className="objet">
              <p className="text">
                Reclamation about payement and every single student
              </p>
              <p className="type">urgent</p>
            </div>
          </td>
          <td>
            <div className="status">Fermé</div>
          </td>
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
              Admin
            </div>
          </td>
          <td>
            <div className="objet">
              <p className="text">
                Reclamation about payement and every single student
              </p>
              <p className="type">urgent</p>
            </div>
          </td>
          <td>
            <div className="status">Fermé</div>
          </td>
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
              Admin
            </div>
          </td>
          <td>
            <div className="objet">
              <p className="text">
                Reclamation about payement and every single student
              </p>
              <p className="type">urgent</p>
            </div>
          </td>
          <td>
            <div className="status">Fermé</div>
          </td>
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
              Admin
            </div>
          </td>
          <td>
            <div className="objet">
              <p className="text">
                Reclamation about payement and every single student
              </p>
              <p className="type">urgent</p>
            </div>
          </td>
          <td>
            <div className="status">Fermé</div>
          </td>
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

export default TicketsTable;
