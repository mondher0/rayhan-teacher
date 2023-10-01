"use client";
import "./add-ticket.css";

const AddTicketPage = () => {
  return (
    <main>
      <div className="add-ticket">
        <form>
          <div className="form-control">
            <div className="input-control">
              <label htmlFor="object">Object</label>
              <input type="text" name="object" id="object" />
            </div>
            <div className="input-control">
              <label htmlFor="service">Service</label>
              <select name="service" id="service">
                <option value="1">Service 1</option>
                <option value="2">Service 2</option>
                <option value="3">Service 3</option>
                <option value="4">Service 4</option>
              </select>
            </div>
            <div className="input-control">
              <label htmlFor="importance">Importance</label>
              <select name="importance" id="importance">
                <option value="1">Service 1</option>
                <option value="2">Service 2</option>
                <option value="3">Service 3</option>
                <option value="4">Service 4</option>
              </select>
            </div>
          </div>
          <div className="input-control">
            <label htmlFor="message">Message</label>
            <textarea id="message" cols={40} rows={10}></textarea>
          </div>
          <div className="btn-container">
            <button className="btn">Envoyer</button>
          </div>
        </form>
      </div>
    </main>
  );
};

export default AddTicketPage;
