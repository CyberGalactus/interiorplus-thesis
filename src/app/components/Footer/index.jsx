import Styles from './Footer.module.css'

const Footer = () => {
    return (
        <>
        <div className={Styles.footer}>
            <div className={Styles.logocontainer}>
                <a href="/">
                    <img
                        className={Styles.footerLogoImage}
                        src="/interiorPLus-Svart.png"
                        alt="Interior plus logo"
                        />
                </a>
            </div>
            <div className={Styles.contentcontainer}>
                <div className={Styles.leftcontent}>
                    <ul>
                        <li><a href="mailto:info@interiorplus.com">info@interiorplus.com</a></li>
                        <li>+46(0)8-665 31 18</li>
                        <li>Grev Turegatan 57, SE-114 38 Stockholm</li>
                        <li>The showroom is open exclusively for scheduled meetings.</li>
                    </ul>
                </div>

                <div className={Styles.middlecontent}>
                    <ul>
                        <li>
                            <a className={Styles.instagramlinks}
                            href="https://www.instagram.com/interior_plus08?igsh=a2JlcWxqY3o2YWh5"
                            target="_blank">
                                <img src="/instagram.png" alt='icon' />
                                <p className={Styles.instagram}>FOLLOW US ON INSTAGRAM</p>
                            </a>
                        </li>
                    </ul>
                </div>

                <div className={Styles.rightcontent}>
                    <ul>
                        <li>
                            Grev Turegatan 57, SE-114 38 Stockholm
                        </li>
                        <li className={Styles.description}>
                            The showroom is open exclusively for scheduled meetings.
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div className={Styles.lowerfooter}>
            <p>designed and developed by Edu Garma Andersen</p>
        </div>
        </>
    )
}

export default Footer;