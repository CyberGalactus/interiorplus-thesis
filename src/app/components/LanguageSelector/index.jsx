import { useState, useEffect, useRef } from 'react';
import { useAnimate, stagger, motion } from 'framer-motion';
import Image from 'next/image';
import sweden from '../../../../public/sweden.png'
import england from '../../../../public/england.png'
import spain from '../../../../public/spain.png'
import france from '../../../../public/france.png'
import italy from '../../../../public/italy.png'
import german from '../../../../public/german.png'
import japan from '../../../../public/japan.png'
import china from '../../../../public/china.png'
import { useRouter, usePathname, useSearchParams } from 'next/navigation';
import Styles from './LanguageSelectors.module.css';


function LanguageSelector() {
    const [open, setOpen] = useState(false);
    const dropdownRef = useRef(null);
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [dropdownRef]);

    const handleItemClick = (value) => {
        const currentPath = pathname || "/";
        const currentSearchParams = searchParams.toString();

        const pathSegments = currentPath.split('/');
        if (pathSegments.length > 1 && pathSegments[1].length === 2) {
            pathSegments[1] = value;
        } else {
            pathSegments.splice(1, 0, value);
        }

        const newPath = pathSegments.join('/');
        const newUrl = `${newPath}${currentSearchParams ? `?${currentSearchParams}` : ''}`;

        router.replace(newUrl);
        setOpen(false);
    };

    return (
        <div ref={dropdownRef} className={Styles.languageSelector}>
            <motion.button onClick={() => setOpen(!open)} whileTap={{ scale: 1.3 }} className={Styles.button}>
                <div>
                    <Image className={Styles.flag} src={sweden} alt="Selected language flag" />
                </div>
            </motion.button>
            {open && (
                <div className={Styles.dropdown}>
                    <ul>
                        <li className={Styles.dropdownItem} onClick={() => handleItemClick('sv')}>
                            <Image src={sweden} alt="Swedish flag" />
                            <p>SV</p>
                        </li>
                        <li className={Styles.dropdownItem} onClick={() => handleItemClick('en')}>
                            <Image src={england} alt="English flag" />
                            <p>EN</p>
                        </li>
                        <li className={Styles.dropdownItem} onClick={() => handleItemClick('es')}>
                            <Image src={spain} alt="Spanish flag" />
                            <p>ES</p>
                        </li>
                        <li className={Styles.dropdownItem} onClick={() => handleItemClick('fr')}>
                            <Image src={france} alt="French flag" />
                            <p>FR</p>
                        </li>
                        <li className={Styles.dropdownItem} onClick={() => handleItemClick('it')}>
                            <Image src={italy} alt="Italian flag" />
                            <p>IT</p>
                        </li>
                        <li className={Styles.dropdownItem} onClick={() => handleItemClick('de')}>
                            <Image src={german} alt="German flag" />
                            <p>DE</p>
                        </li>
                        <li className={Styles.dropdownItem} onClick={() => handleItemClick('jp')}>
                            <Image src={japan} alt="Japanese flag" />
                            <p>JP</p>
                        </li>
                        <li className={Styles.dropdownItem} onClick={() => handleItemClick('zh')}>
                            <Image src={china} alt="Chinese flag" />
                            <p>ZH</p>
                        </li>
                    </ul>
                </div>
            )}
        </div>
    );
};

export default LanguageSelector;