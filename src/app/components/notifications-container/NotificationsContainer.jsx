import "./notifications-container.css";
import flagNot from "../../atoms/assets/flag-not.svg";
import smsNot from "../../atoms/assets/sms-not.svg";
import SingleNotification from "../single-notification/SingleNotification";
import { useLocale, useTranslations } from "next-intl";

const NotificationsContainer = () => {
  const t = useTranslations("Index");
  const locale = useLocale();
  return (
    <div
      className={
        locale === "ar"
          ? "notifications-container-ar notification-container"
          : "notification-container"
      }
    >
      <p className="notificatins-title">{t("notifications")}</p>
      <SingleNotification
        icon={smsNot}
        not="Selena comments on your posts about Algorithm tasks"
        time={t("twoMinntesAgo")}
      />
      <SingleNotification
        icon={flagNot}
        not="Your task is overdue for 13 hours and 25 minutes"
        time={t("twoMinntesAgo")}
      />
      <SingleNotification
        icon={smsNot}
        not="Selena comments on your posts about Algorithm tasks"
        time={t("twoMinntesAgo")}
      />
      <SingleNotification
        icon={flagNot}
        not="Your task is overdue for 13 hours and 25 minutes"
        time={t("twoMinntesAgo")}
      />
      <SingleNotification
        icon={smsNot}
        not="Selena comments on your posts about Algorithm tasks"
        time={t("twoMinntesAgo")}
      />
      <SingleNotification
        icon={flagNot}
        not="Your task is overdue for 13 hours and 25 minutes"
        time={t("twoMinntesAgo")}
      />
      <SingleNotification
        icon={smsNot}
        not="Selena comments on your posts about Algorithm tasks"
        time={t("twoMinntesAgo")}
      />
      <SingleNotification
        icon={flagNot}
        not="Your task is overdue for 13 hours and 25 minutes"
        time={t("twoMinntesAgo")}
      />
      <SingleNotification
        icon={smsNot}
        not="Selena comments on your posts about Algorithm tasks"
        time={t("twoMinntesAgo")}
      />
      <SingleNotification
        icon={flagNot}
        not="Your task is overdue for 13 hours and 25 minutes"
        time={t("twoMinntesAgo")}
      />
      <SingleNotification
        icon={smsNot}
        not="Selena comments on your posts about Algorithm tasks"
        time={t("twoMinntesAgo")}
      />
      <SingleNotification
        icon={flagNot}
        not="Your task is overdue for 13 hours and 25 minutes"
        time={t("twoMinntesAgo")}
      />
      <SingleNotification
        icon={smsNot}
        not="Selena comments on your posts about Algorithm tasks"
        time={t("twoMinntesAgo")}
      />
      <SingleNotification
        icon={flagNot}
        not="Your task is overdue for 13 hours and 25 minutes"
        time={t("twoMinntesAgo")}
      />
    </div>
  );
};

export default NotificationsContainer;
