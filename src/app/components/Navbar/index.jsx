// Navbar.js
import Styles from './navbar.module.css';

const Navbar = () => {
    return (
        <nav className={Styles.navbar}>
            <div className={Styles.leftNav}>
                <a href="/">
                    <img
                        className={Styles.logoImage}
                        src="/interiorPLus.png"
                        alt="Interior plus logo"
                    />
                </a>
            </div>

            <div className={Styles.rightNav}>
                <ul>
                    <li>
                        <a href="/">
                            <span>
                                Suppliers
                            </span>
                        </a>
                    </li>

                    <li>
                        <a href="/">
                            <span>
                                About us
                            </span>
                        </a>
                    </li>

                    <li>
                        <a href="/">
                            <span>
                                Showroom+
                            </span>
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
