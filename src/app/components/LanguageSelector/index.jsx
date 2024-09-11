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


function LanguageSelector({ addClass, hamburgerMargin, closeSelector, hideContact }) {
    const [open, setOpen] = useState(false);
    const [scope, animate] = useAnimate();
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const dropdownRef = useRef(null);

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

    useEffect(() => {
        setOpen(closeSelector && false);
    }, [closeSelector]);

    useEffect(() => {
        hideContact?.(open);
    }, [open, hideContact]);

    const staggerList = stagger(0.1, { startDelay: 0.25 });

    useEffect(() => {
        animate(
            'section',
            {
                height: open ? 'auto' : 0,
                opacity: open ? 1 : 0,
                display: 'hidden',
            },
            {
                type: 'spring',
                bounce: 0,
                duration: 0.4
            }
        );
        animate(
            'li',
            open
                ? { opacity: 1, scale: 1, y: 0 }
                : { opacity: 0, scale: 0.3, y: -50 },
            {
                duration: 0.2,
                delay: open ? staggerList : 0
            }
        );
    }, [open]);

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
    <div ref={dropdownRef} className={Styles.languageselector}>
        <div className={Styles.container} ref={scope}>
            <motion.button onClick={() => setOpen(!open)} whileTap={{ scale: 1.3 }} className={Styles.button}>
                <div>
                    {locale === 'se' && <Image className="rounded-full w-8" src={sweden} alt="Swedish flag" />}
                    {locale === 'en' && <Image className="rounded-full w-8" src={engflag} alt="English flag" />}
                    {locale === 'no' && <Image className="rounded-full w-8" src={norflag} alt="Norwegian flag" />}
                    {locale === 'de' && <Image className="rounded-full w-8" src={gerflag} alt="German flag" />}
                    {locale === 'da' && <Image className="rounded-full w-8" src={denflag} alt="Danish flag" />}
                    {locale === 'fi' && <Image className="rounded-full w-8" src={fiflag} alt="Finnish flag" />}
                </div>
            </motion.button>
            <section >
                <li onClick={() => handleItemClick('sv')}>
                    <Image src={sweden} alt="Swedish flag" />
                    <p className="pl-3" >SV</p>
                </li>
                <li onClick={() => handleItemClick('en')}>
                    <Image src={england} alt="English flag" />
                    <p>EN</p>
                </li>
                <li onClick={() => handleItemClick('es')}>
                    <Image src={spain} alt="spain flag" />
                    <p>ES</p>
                </li>
                <li onClick={() => handleItemClick('fr')}>
                    <Image src={france} alt="france flag" />
                    <p>FR</p>
                </li>
                <li onClick={() => handleItemClick('it')}>
                    <Image src={italy} alt="italy flag" />
                    <p>IT</p>
                </li>
                <li onClick={() => handleItemClick('de')}>
                    <Image src={german} alt="German flag" />
                    <p>DE</p>
                </li>
                <li onClick={() => handleItemClick('jp')}>
                    <Image src={japan} alt="japan flag" />
                    <p>JP</p>
                </li>
                <li onClick={() => handleItemClick('zh')}>
                    <Image src={china} alt="china flag" />
                    <p>ZH</p>
                </li>
            </section>
        </div>
    </div>
  );
};

export default LanguageSelector;