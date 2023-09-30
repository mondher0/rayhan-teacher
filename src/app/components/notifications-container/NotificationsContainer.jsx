import "./notifications-container.css";
import flagNot from "../../atoms/assets/flag-not.svg";
import smsNot from "../../atoms/assets/sms-not.svg";
import SingleNotification from "../single-notification/SingleNotification";

const NotificationsContainer = () => {
  return (
    <div className="notification-container">
      <p className="notificatins-title">Notifications</p>
      <SingleNotification
        icon={smsNot}
        not="Selena comments on your posts about Algorithm tasks"
        time="2 min ago"
      />
      <SingleNotification
        icon={flagNot}
        not="Your task is overdue for 13 hours and 25 minutes"
        time="2 min ago"
      />
      <SingleNotification
        icon={smsNot}
        not="Selena comments on your posts about Algorithm tasks"
        time="2 min ago"
      />
      <SingleNotification
        icon={flagNot}
        not="Your task is overdue for 13 hours and 25 minutes"
        time="2 min ago"
      />
      <SingleNotification
        icon={smsNot}
        not="Selena comments on your posts about Algorithm tasks"
        time="2 min ago"
      />
      <SingleNotification
        icon={flagNot}
        not="Your task is overdue for 13 hours and 25 minutes"
        time="2 min ago"
      />
      <SingleNotification
        icon={smsNot}
        not="Selena comments on your posts about Algorithm tasks"
        time="2 min ago"
      />
      <SingleNotification
        icon={flagNot}
        not="Your task is overdue for 13 hours and 25 minutes"
        time="2 min ago"
      />
      <SingleNotification
        icon={smsNot}
        not="Selena comments on your posts about Algorithm tasks"
        time="2 min ago"
      />
      <SingleNotification
        icon={flagNot}
        not="Your task is overdue for 13 hours and 25 minutes"
        time="2 min ago"
      />
      <SingleNotification
        icon={smsNot}
        not="Selena comments on your posts about Algorithm tasks"
        time="2 min ago"
      />
      <SingleNotification
        icon={flagNot}
        not="Your task is overdue for 13 hours and 25 minutes"
        time="2 min ago"
      />
      <SingleNotification
        icon={smsNot}
        not="Selena comments on your posts about Algorithm tasks"
        time="2 min ago"
      />
      <SingleNotification
        icon={flagNot}
        not="Your task is overdue for 13 hours and 25 minutes"
        time="2 min ago"
      />
    </div>
  );
};

export default NotificationsContainer;
