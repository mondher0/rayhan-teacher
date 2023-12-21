"use client";
import "./profile-container.css";
import profilePic from "../../atoms/assets/profile-pic.png";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";

const ProfileContainer = ({ userInfo }) => {
  const t = useTranslations("Index");
  const { first_name, last_name, email, userable } = userInfo;
  const { percentage } = userable || {};
  const [user, setUser] = useState({});
  useEffect(() => {
    setUser({
      first_name,
      last_name,
      email,
      userable,
    });
  }, []);
  return (
    <div className="profile-container">
      <p className="profile-title">{t("profileDetails")}</p>
      <div className="profile-pictures">
        <div className="profile-img">
          <Image src={profilePic} width={250} height={250} />
          <p className="name">
            {first_name} {last_name}
          </p>
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
              <input type="text" id="first-name" value={user.first_name} />
            </div>
            <div className="half-input">
              <label htmlFor="last-name">{t("lastName")}</label>
              <input type="text" id="last-name" value={user.last_name} />
            </div>
          </div>
          <div className="form-control">
            <div className="half-input">
              <label htmlFor="email">{t("email")}</label>
              <input type="text" id="email" value={user.email} />
            </div>
            <div className="half-input">
              <label htmlFor="fonction">{t("fonction")}</label>
              <input type="text" id="fonction" value={userable?.function} />
            </div>
          </div>
          <div className="form-control">
            <div className="half-input">
              <label htmlFor="percentage">{t("pourcentage")}</label>
              <input type="text" id="percentage" value={percentage} />
            </div>
            <div className="half-input">
              <label htmlFor="permissions">{t("permissions")}</label>
              <input type="text" id="permissions" disabled />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProfileContainer;
