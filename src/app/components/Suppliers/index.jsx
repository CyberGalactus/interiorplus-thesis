"use client"
import Image from 'next/image';
import Styles from './Suppliers.module.css'

const Suppliers = () => {
    return (
        <>
        <div className={Styles.suppliersContainer} id="suppliers">
            <h1 className={Styles.title}>Our Suppliers</h1>
            <p className={Styles.subTitle}>Below, you will find a list of our suppliers. Click on the respective suppliers logo to visit their website.</p>
            <div className={Styles.showcaseContainer}>
                <div className={Styles.showcaseCol}>
                    <a className={Styles.showcasebox} href="https://www.andrewmartin.co.uk/" target="_blank">
                        <div className={Styles.image}>
                            <Image 
                            src="/andrewmartin.png" 
                            alt="Andrew Martin"
                            width={300}
                            height={54}
                            />
                        </div>
                    </a>
                </div>
                <div className={Styles.showcaseCol} id="Brochier">
                    <a className={Styles.showcasebox} href="https://brochier.it/" target="_blank">
                        <div className={Styles.image}>
                            <Image 
                            src="/brochier.png" 
                            alt="Brochier"
                            width={300}
                            height={68} 
                            />
                        </div>
                    </a>
                </div>
                <div className={Styles.showcaseCol} id="CC-Milano">
                    <a className={Styles.showcasebox} href="https://www.cec-milano.uk/" target="_blank">
                        <div className={Styles.image}>
                            <Image 
                            src="/ccmilano.png" 
                            alt="C&C Milano"
                            width={300}
                            height={110} 
                            />
                        </div>
                    </a>
                </div>
                <div className={Styles.showcaseCol}>
                    <a className={Styles.showcasebox} href="https://christopherfarr.com/" target="_blank">
                        <div className={Styles.image}>
                            <Image 
                            src="/christopherfarr.png" 
                            alt="Christopher Farr"
                            width={300}
                            height={52} 
                            />
                        </div>
                    </a>
                </div>
                <div className={Styles.showcaseCol}>
                    <a className={Styles.showcasebox} href="https://christopherfarrcloth.com/" target="_blank">
                        <div className={Styles.image}>
                            <Image 
                            src="/christopherfarrcloth.png" 
                            alt="Christopher Farr | Cloth" 
                            width={300}
                            height={67}
                            />
                        </div>
                    </a>
                </div>
                <div className={Styles.showcaseCol} id="Declercq">
                    <a className={Styles.showcasebox} href="https://www.declercqpassementiers.fr/#" target="_blank">
                        <div className={Styles.image}>
                            <Image 
                            src="/declercqpassementiers.png" 
                            alt="Declercq passementiers"
                            width={300}
                            height={84}
                            />
                        </div>
                    </a>
                </div>
                <div className={Styles.showcaseCol}>
                    <a className={Styles.showcasebox} href="https://www.edmond-petit.fr/" target="_blank">
                        <div className={Styles.image}>
                            <Image 
                            src="/edmondpetit.png" 
                            alt="Edmond Petit" 
                            width={300}
                            height={72}
                            />
                        </div>
                    </a>
                </div>
                <div className={Styles.showcaseCol}>
                    <a className={Styles.showcasebox} href="https://interiors.hollandandsherry.com/en" target="_blank">
                        <div className={Styles.image}>
                            <Image 
                            src="/hollandandsherry.png" 
                            alt=" Holland & Sherry"
                            width={300}
                            height={39}
                            />
                        </div>
                    </a>
                </div>
                <div className={Styles.showcaseCol}>
                    <a className={Styles.showcasebox} href="https://jagtar.com/website/" target="_blank">
                        <div className={Styles.image}>
                            <Image 
                            src="/jagtar.png" 
                            alt="JagTar"
                            width={300}
                            height={60} 
                            />
                        </div>
                    </a>
                </div>
                <div className={Styles.showcaseCol} id="luigi-bevilacqua">
                    <a className={Styles.showcasebox} href="https://www.luigi-bevilacqua.com/en/" target="_blank">
                        <div className={Styles.image}>
                            <Image 
                            src="/luigibevilacqua.png" 
                            alt="Luigi Bevilacqua"
                            width={300}
                            height={114} 
                            />
                        </div>
                    </a>
                </div>
                <div className={Styles.showcaseCol}>
                    <a className={Styles.showcasebox} href="https://www.metaphores.com/en" target="_blank">
                        <div className={Styles.image}>
                            <Image 
                            src="/metaphores.png" 
                            alt="Métaphores"
                            width={300}
                            height={67} 
                            />
                        </div>
                    </a>
                </div>
                <div className={Styles.showcaseCol}>
                    <a className={Styles.showcasebox} href="https://sandrajordan.com/" target="_blank">
                        <div className={Styles.image}>
                            <Image 
                            src="/sandrajordan.png" 
                            alt="Sandra Jordan"
                            width={300}
                            height={75.61} 
                            />
                        </div>
                    </a>
                </div>
            </div>
        </div>
        </>
    )
}

export default Suppliers;