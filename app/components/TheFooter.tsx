import Link from 'next/link';
import styles from './TheFooter.module.css';
import Image from 'next/image';
import tg from './../../public/tg.png';

export default function TheFooter() {
    return (
        <footer className={styles.footer}>
            <div className={styles.containerOne}>
                <h1>ЛОГО</h1>
                <p>© НАЗВАНИЕ 2023. Все права защищены</p>
            </div>
            <div className={styles.containerTwo}>
                <div className={styles.colOne}>
                    <div className={styles.colOneOne}>
                        <Link className={styles.Link} href='#'>Контакты</Link>
                        <Link className={styles.Link} href='#'>Редакиця</Link>
                    </div>
                    <div className={styles.colOneOne}>
                        <Link className={styles.Link} href='#'>Политика конфиденциальности</Link>
                        <Link className={styles.Link} href='#'>Условия использования</Link>
                        <Link className={styles.Link} href='#'>Реклама</Link>
                    </div>
                </div>
                <div className={styles.colTwo}>
                    <Link className={styles.Link} href='#'>По любым вопросам пишите на <span>privet@yandex.com</span></Link>
                    <Link className={`${styles.Link} ${styles.center}`} href='#'><Image src={tg} alt="tg" /> Подписаться</Link>
                </div>
            </div>
            <div className={styles.containerThree}>
                <Link className={styles.orange} href='#'>Предложить новость</Link>
            </div>
        </footer>)
}
