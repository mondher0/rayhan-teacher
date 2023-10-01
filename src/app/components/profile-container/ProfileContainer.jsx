import "./profile-container.css";
import profilePic from "../../atoms/assets/profile-pic.png";
import Image from "next/image";

const ProfileContainer = () => {
  return (
    <div className="profile-container">
      <p className="profile-title">Profile Details</p>
      <div className="profile-pictures">
        <div className="profile-img">
          <Image src={profilePic} width={250} height={250} />
          <p className="name">Mondher Mameri</p>
          <p className="job">Teacher</p>
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
              <label htmlFor="first-name">First name</label>
              <input type="text" id="first-name" />
            </div>
            <div className="half-input">
              <label htmlFor="last-name">Last name</label>
              <input type="text" id="last-name" />
            </div>
          </div>
          <div className="form-control">
            <div className="half-input">
              <label htmlFor="email">Email</label>
              <input type="text" id="email" />
            </div>
            <div className="half-input">
              <label htmlFor="fonction">Fonction</label>
              <input type="text" id="fonction" />
            </div>
          </div>
          <div className="form-control">
            <div className="half-input">
              <label htmlFor="percentage">Percentage</label>
              <input type="text" id="percentage" />
            </div>
            <div className="half-input">
              <label htmlFor="permissions">Permissions</label>
              <input type="text" id="permissions" />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProfileContainer;
