import Styles from './Footer.module.css'
import Image from 'next/image';

const Footer = () => {
    return (
        <>
        <div className={Styles.footer}>
            <div className={Styles.logocontainer}>
                <div className={Styles.horizontalLine}></div>
                <a href="/">
                    <Image
                        className={Styles.footerLogoImage}
                        src="/interiorPLus.png"
                        alt="Interior plus logo"
                        width={190}
                        height={90}
                        // quality={100}
                        />
                </a>
                <div className={Styles.horizontalLine}></div>
            </div>
            <div className={Styles.contentcontainer}>
                <div className={Styles.leftcontent}>
                    <ul>
                        <li><a href="mailto:info@interiorplus.com">info@interiorplus.com</a></li>
                        <li>+46(0)8-665 31 18</li>
                        <li>Grev Turegatan 57<br/>114 38 Stockholm</li>
                        <li>The showroom is open exclusively <br/>for scheduled meetings.</li>
                    </ul>
                </div>

                <div className={Styles.middlecontent}>
                    <ul>
                        <li>
                            <a className={Styles.instagramlinks}
                            href="https://www.instagram.com/interior_plus08?igsh=a2JlcWxqY3o2YWh5"
                            target="_blank">
                                <Image 
                                src="/instagram.png" 
                                alt='icon' 
                                className={Styles.instaimg} 
                                width={100} 
                                height={100} 
                                quality={100}/>
                            </a>
                            <p className={Styles.instagram}>FOLLOW US ON INSTAGRAM</p>
                        </li>
                    </ul>
                </div>

                <div className={Styles.rightcontent}>
                    <h2>site</h2>
                    <ul>
                        <li>
                            <a href="/">
                                <span>Suppliers</span>
                            </a>
                        </li>
                         <li>
                            <a href="/">
                                <span>about us</span>
                            </a>
                        </li>
                         <li>
                            <a href="/">
                                <span>Showroom</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div className={Styles.lowerFooter}>
            <p>Designed and developed by Edu Garma Andersen as a master thesis</p>
        </div>
        </>
    )
}

export default Footer;