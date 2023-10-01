import "./profile-container.css";
import profilePic from "../../atoms/assets/profile-pic.png";
import Image from "next/image";
import { useTranslations } from "next-intl";

const ProfileContainer = () => {
  const t = useTranslations("Index");
  return (
    <div className="profile-container">
      <p className="profile-title">{t("profileDetails")}</p>
      <div className="profile-pictures">
        <div className="profile-img">
          <Image src={profilePic} width={250} height={250} />
          <p className="name">Mondher Mameri</p>
          <p className="job">{t("teacher")}</p>
        </div>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/DmD7QAxY9zg?si=YaELqsFMCmJ0ip2r"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>
      <div className="profile-data">
        <form>
          <div className="form-control">
            <div className="half-input">
              <label htmlFor="first-name">{t("firstName")}</label>
              <input type="text" id="first-name" />
            </div>
            <div className="half-input">
              <label htmlFor="last-name">{t("lastName")}</label>
              <input type="text" id="last-name" />
            </div>
          </div>
          <div className="form-control">
            <div className="half-input">
              <label htmlFor="email">{t("email")}</label>
              <input type="text" id="email" />
            </div>
            <div className="half-input">
              <label htmlFor="fonction">{t("fonction")}</label>
              <input type="text" id="fonction" />
            </div>
          </div>
          <div className="form-control">
            <div className="half-input">
              <label htmlFor="percentage">{t("pourcentage")}</label>
              <input type="text" id="percentage" />
            </div>
            <div className="half-input">
              <label htmlFor="permissions">{t("permissions")}</label>
              <input type="text" id="permissions" />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProfileContainer;
