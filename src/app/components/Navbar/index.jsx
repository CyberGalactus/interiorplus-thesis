import Link from 'next/link';
import Styles from './Navbar.module.css';


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
                        <Link href="#showroom">
                            <span>
                                Showroom+
                            </span>
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;