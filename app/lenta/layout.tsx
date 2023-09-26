import styles from './main.module.css';
import Navigation from '../components/Navigation';

const navItems = [
    { label: 'Лента', href: '/lenta/info' },
    { label: 'Происшествия', href: '/lenta/l' },
    { label: 'Авто', href: '/lenta/l' },
    { label: 'Бизнес', href: '/lenta/l' },
    { label: 'Здоровье', href: '/lenta/l' },
    { label: 'Крипто', href: '/lenta/l' },
    { label: 'Недвижимость', href: '/lenta/l' },
    { label: 'Образование', href: '/lenta/l' },
    { label: 'Полититка', href: '/lenta/l' },
    { label: 'Туризм', href: '/lenta/l' },
    { label: 'Шоу-бизнес', href: '/lenta/l' },
    { label: 'Спорт', href: '/lenta/l' },
    { label: 'Стиль', href: '/lenta/l' },
    { label: 'Науки и технологии', href: '/lenta/l' },
    { label: 'Экономика', href: '/lenta/l' },
];

export default function Users({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <main className={styles.container}>
            <div className={styles.gridArea}>
                <div className={styles.sideMenu}>
                    <Navigation navLinks={navItems} />
                </div>
                <div className={styles.infoSide}>
                    {children}
                </div>
            </div>
        </main>
    )
}