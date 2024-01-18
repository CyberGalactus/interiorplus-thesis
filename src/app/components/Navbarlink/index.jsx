import Link from "next/link";
import Styles from "./Navbarlink.module.css"

const NavLink = ({ href, title }) => {
  return (
    <Link
      href={href} 
      className={Styles.navlink}
      >
      {title}
    </Link>
  );
};

export default NavLink;