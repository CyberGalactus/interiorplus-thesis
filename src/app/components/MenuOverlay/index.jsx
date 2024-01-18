import React from "react";
import NavLink from '../Navbarlink';
import Styles from './MenuOverlay.module.css'

const MenuOverlay = ({ links }) => {
  return (
    <div className={Styles.overlay}>
      <ul className={Styles.menuList}>
        {links.map((link, index) => (
          <li key={index} className={Styles.menuListItem}>
            <NavLink href={link.path} title={link.title} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MenuOverlay;