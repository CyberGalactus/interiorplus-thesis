"use client"
import Styles from './Suppliers.module.css'

const Suppliers = () => {
    return (
        <>
        <div className={Styles.suppliersContainer}>
            <h1 className={Styles.title}>Our Suppliers</h1>
            <div className={Styles.showcaseContainer}>
                <div className={Styles.showcaseCol}>
                    <a className={Styles.showcasebox} href="https://www.andrewmartin.co.uk/" target="_blank">
                        <div className={Styles.image}>
                            <img src="/andrewmartin.png" alt="Andrew Martin" />
                        </div>
                    </a>
                </div>
                <div className={Styles.showcaseCol} id="Brochier">
                    <a className={Styles.showcasebox} href="https://brochier.it/" target="_blank">
                        <div className={Styles.image}>
                            <img src="/brochier.png" alt="Brochier" />
                        </div>
                    </a>
                </div>
                <div className={Styles.showcaseCol} id="CC-Milano">
                    <a className={Styles.showcasebox} href="https://www.cec-milano.uk/" target="_blank">
                        <div className={Styles.image}>
                            <img src="/ccmilano.png" alt="C&C Milano" />
                        </div>
                    </a>
                </div>
                <div className={Styles.showcaseCol}>
                    <a className={Styles.showcasebox} href="https://christopherfarr.com/" target="_blank">
                        <div className={Styles.image}>
                            <img src="/christopherfarr.png" alt="Christopher Farr" />
                        </div>
                    </a>
                </div>
                <div className={Styles.showcaseCol}>
                    <a className={Styles.showcasebox} href="https://christopherfarrcloth.com/" target="_blank">
                        <div className={Styles.image}>
                            <img src="/christopherfarrcloth.png" alt="Christopher Farr | Cloth" />
                        </div>
                    </a>
                </div>
                <div className={Styles.showcaseCol} id="Declercq">
                    <a className={Styles.showcasebox} href="https://www.declercqpassementiers.fr/#" target="_blank">
                        <div className={Styles.image}>
                            <img src="/declercqpassementiers.png" alt="Declercq passementiers" />
                        </div>
                    </a>
                </div>
                <div className={Styles.showcaseCol}>
                    <a className={Styles.showcasebox} href="https://www.edmond-petit.fr/" target="_blank">
                        <div className={Styles.image}>
                            <img src="/edmondpetit.png" alt="Edmond Petit" />
                        </div>
                    </a>
                </div>
                <div className={Styles.showcaseCol}>
                    <a className={Styles.showcasebox} href="https://interiors.hollandandsherry.com/en" target="_blank">
                        <div className={Styles.image}>
                            <img src="/hollandandsherry.png" alt=" Holland & Sherry" />
                        </div>
                    </a>
                </div>
                <div className={Styles.showcaseCol}>
                    <a className={Styles.showcasebox} href="https://jagtar.com/website/" target="_blank">
                        <div className={Styles.image}>
                            <img src="/jagtar.png" alt="JagTar" />
                            <div className={Styles.overlay}>
                                <h3>Andrew Martin</h3>
                                <p>Beskrivning eller annan relevant information</p>
                            </div>
                        </div>
                    </a>
                </div>
                <div className={Styles.showcaseCol} id="luigi-bevilacqua">
                    <a className={Styles.showcasebox} href="https://www.luigi-bevilacqua.com/en/" target="_blank">
                        <div className={Styles.image}>
                            <img src="/luigibevilacqua.png" alt="Luigi Bevilacqua" />
                        </div>
                    </a>
                </div>
                <div className={Styles.showcaseCol}>
                    <a className={Styles.showcasebox} href="https://www.metaphores.com/en" target="_blank">
                        <div className={Styles.image}>
                            <img src="/metaphores.png" alt="Métaphores" />
                        </div>
                    </a>
                </div>
                <div className={Styles.showcaseCol}>
                    <a className={Styles.showcasebox} href="https://sandrajordan.com/" target="_blank">
                        <div className={Styles.image}>
                            <img src="/sandrajordan.png" alt="Sandra Jordan" />
                        </div>
                    </a>
                </div>
            </div>
        </div>
        </>
    )
}

export default Suppliers;