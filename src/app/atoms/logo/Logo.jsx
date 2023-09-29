import Image from "next/image";
import logo from "./logo.svg";

const Logo = () => {
  return (
    <Image src={logo} alt="Picture of the author" width={100} height={100} />
  );
};

export default Logo;
