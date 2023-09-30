import "./nav-bar.css";
import { IoIosNotificationsOutline } from "react-icons/io";
import { FiLogOut } from "react-icons/fi";
import Image from "next/image";
import avatar from "./avatar.svg";
import keyBoardOpen from "./keyboardopen.svg";

const NavBar = () => {
  return (
    <nav className="nav-bar">
      <div className="nav-btns login-nav">
        <div className="user-info">
          <div className="text">
            <p className="name">Mondher Mameri</p>
            <p className="job">Teacher</p>
          </div>
          <div className="avatar hover">
            <Image src={avatar} alt="avatar" width={60} height={60} />
          </div>
        </div>

        <div className="divider"></div>
        <Image src={keyBoardOpen} alt="keyboard open" width={30} height={30} />

        <IoIosNotificationsOutline
          size={40}
          color="#838E9E"
          className="hover"
        />

        <FiLogOut size={30} color="#838E9E" className="hover" />
      </div>
    </nav>
  );
};

export default NavBar;
