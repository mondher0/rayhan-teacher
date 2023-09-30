import "../notifications-container/notifications-container.css";
import SingleCmnt from "../single-cmnt/SingleCmnt";

const Cmnts = () => {
  return (
    <div className="notification-container">
      <p className="notificatins-title">Comments</p>
      <SingleCmnt time="49 minutes ago" />
      <SingleCmnt time="49 minutes ago" />
      <SingleCmnt time="49 minutes ago" />
      <SingleCmnt time="49 minutes ago" />
      <SingleCmnt time="49 minutes ago" />
      <SingleCmnt time="49 minutes ago" />
      <SingleCmnt time="49 minutes ago" />
      <SingleCmnt time="49 minutes ago" />
    </div>
  );
};

export default Cmnts;
