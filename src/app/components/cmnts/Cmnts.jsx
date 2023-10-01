import { useTranslations } from "next-intl";
import "../notifications-container/notifications-container.css";
import SingleCmnt from "../single-cmnt/SingleCmnt";

const Cmnts = () => {
  const t = useTranslations("Index");
  return (
    <div className="notification-container">
      <p className="notificatins-title">{t("cmnts")}</p>
      <SingleCmnt time={t("twoMinntesAgo")} />
      <SingleCmnt time={t("twoMinntesAgo")} />
      <SingleCmnt time={t("twoMinntesAgo")} />
      <SingleCmnt time={t("twoMinntesAgo")} />
      <SingleCmnt time={t("twoMinntesAgo")} />
      <SingleCmnt time={t("twoMinntesAgo")} />
      <SingleCmnt time={t("twoMinntesAgo")} />
      <SingleCmnt time={t("twoMinntesAgo")} />
    </div>
  );
};

export default Cmnts;
