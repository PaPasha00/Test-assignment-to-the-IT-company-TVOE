'use client'
import style from './NavStyle.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import orange from './../../public/arrow.png';
import attention from './../../public/attention.png';

type NavLink = {
    label: string;
    href: string;
};
type Props = {
    navLinks: NavLink[];
}

const Navigation = ({navLinks} : Props) => {
    const pathname = usePathname();

    return ( 
        <>
        {
            navLinks.map(e => {
                const active = pathname === e.href;
                return (
                <Link href={e.href} className={active ? `${style.button} ${style.active}` : `${style.button}`} key={e.label}> 
                    <Image className={style.img} src={active ? orange : attention} alt='img'/>
                    <p>{e.label}</p>
                </Link>)
            })
        }
        
        </>
     );
};
 
export default Navigation;