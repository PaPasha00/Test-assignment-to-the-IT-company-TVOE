import styles from './HeadStyle.module.css';
import Image from 'next/image';
import date from './../../public/date.png';
import dollar from './../../public/dollar.png';
import euro from './../../public/euro.png';
import btc from './../../public/btc.png';
import user from './../../public/user.png';
import find from './../../public/find.png';


export default function TheHeader() {
    return (
        <header className={styles.container}>
            <div className={styles.logo}>
                ЛОГО
            </div>

            <div className={styles.buttonsContainer}>
                <div className={styles.infoStats}>
                    <div className={styles.part}>
                        <Image src={date} alt="date" />
                        <p>ПН, 4.08.2023</p>
                    </div>

                    <div className={styles.part}>
                        <Image src={dollar} alt="dollar" />
                        <p>96.34</p>
                    </div>

                    <div className={styles.part}>
                        <Image src={euro} alt="euro" />
                        <p>104.61</p>
                    </div>

                    <div className={styles.part}>
                        <Image src={btc} alt="btc" />
                        <p>25.725</p>
                    </div>
                </div>

                <div className={styles.userButtons}>
                    <Image src={find} alt="find" />
                    <Image src={user} alt="user" />
                </div>
            </div>
        </header>)
}