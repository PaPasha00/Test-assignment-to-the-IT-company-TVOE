import styles from './info.module.css';
import lightning from './../../../public/lightning.png';
import fire from './../../../public/fire.png';
import like from './../../../public/like.png';
import dis from './../../../public/dis.png';
import po from './../../../public/po.png';
import comm from './../../../public/comm.png';
import pin from './../../../public/pinned.png';
import more from './../../../public/more.png';
import pic from './../../../public/pic.png';
import pic1 from './../../../public/pic1.png';
import pic2 from './../../../public/pic2.png';
import pic3 from './../../../public/pic3.png';
import Image from 'next/image';
import Link from 'next/link';

const infOItems = [
    { text: 'Сотни россиян застряли в Египте из-за отмен рейсов.', time: '14:59', theme: 'Политика' },
    { text: 'На Украине заявили о невосполнимых потерях после российских ударов.', time: '14:59', theme: 'Политика' },
    { text: 'ЕС ввел санкции против силовиков из Крыма из-за дела в отношении журналиста.', time: '14:59', theme: 'Политика' },
    { text: 'Резников назвал профессионалом нового министра обороны Украины Умерова.', time: '14:59', theme: 'Политика' },
];
const itemsTwo = [
    { theme: 'Политика', date: '1.01.2023, 13:53', text: 'Синоптик спрогнозировал срок наступления бабьего лета', r1: '23', r2: '23', r3: '23', comms: '7', pinned: '14' },
    { theme: 'Политика', date: '1.01.2023, 13:53', text: 'Дмитрий Медведев проголосовал онлайн на выборах мэра Москвы', r1: '23', r2: '23', r3: '23', comms: '7', pinned: '14' },
    { theme: 'Политика', date: '1.01.2023, 13:53', text: 'Раскрыты последствия уничтожения беспилотника в небе над Подмосковьем', r1: '23', r2: '23', r3: '23', comms: '7', pinned: '14' },
    { theme: 'Политика', date: '1.01.2023, 13:53', text: 'Невролог назвала основные способы лечения мигрени', r1: '23', r2: '23', r3: '23', comms: '7', pinned: '14' },
];
const itemsThree = [
    { photo: pic, date: '1.01.2023, 13:53', text: 'Синоптик спрогнозировал срок наступления бабьего лета', r1: '23', r2: '23', r3: '23', comms: '7', pinned: '14' },
    { photo: pic1, date: '1.01.2023, 13:53', text: 'Синоптик спрогнозировал срок наступления бабьего лета', r1: '23', r2: '23', r3: '23', comms: '7', pinned: '14' },
    { photo: pic2, date: '1.01.2023, 13:53', text: 'Синоптик спрогнозировал срок наступления бабьего лета', r1: '23', r2: '23', r3: '23', comms: '7', pinned: '14' },
    { photo: pic3, date: '1.01.2023, 13:53', text: 'Синоптик спрогнозировал срок наступления бабьего лета', r1: '23', r2: '23', r3: '23', comms: '7', pinned: '14' },
];

export default function l() {
    return (
        <main className={styles.container}>
            <div className={styles.containerInfoProfile}>
                <div className={styles.info}>
                    <h1>Лента</h1>
                    <div className={styles.posts}>
                        <>
                            {
                                infOItems.map(e => {
                                    return (
                                        <div className={styles.post} key={e.theme}>
                                            <Image src={lightning} alt='lightning' />
                                            <div className={styles.postBody}>
                                                <p>{e.text}</p>
                                                <span className={styles.bottomLine}>
                                                    <span className={styles.time}>{e.time}</span>
                                                    <span className={styles.theme}>{e.theme}</span>
                                                </span>
                                            </div>
                                        </div>)
                                })

                            }
                        </>
                    </div>
                    <div className={styles.runLine}>
                        <div className={styles.runText}>
                            <Image src={fire} alt='fire' />
                            <p>ОЧЕНЬ ВАЖНАЯ НОВОСТЬ</p>
                            <Image src={fire} alt='fire' />
                            <p>ОЧЕНЬ ВАЖНАЯ НОВОСТЬ</p>
                            <Image src={fire} alt='fire' />
                            <p>ОЧЕНЬ ВАЖНАЯ НОВОСТЬ</p>
                        </div>
                    </div>
                </div>

                <div className={styles.profile}>
                    <div className={styles.row}>
                        <Link href='#' className={styles.linkWeb}>Ссылка на сайт</Link>
                        <p>РЕКЛАМА</p>
                    </div>

                    <div className={styles.add}>Реклама</div>
                    <h3>Текст длинного рекламного объявления</h3>
                </div>
            </div>

            <div className={styles.writeMore}>
                <div className={styles.firstText}>
                    <p>Читайте также</p>
                    <Image src={more} alt='more' />
                </div>
                <div className={styles.containerCards}>
                    <>{
                        itemsTwo.map(e => {
                            return (
                                <div className={styles.cardBody} key={e.theme}>
                                    <div className={styles.fullRow}>
                                        <div className={styles.row1}>
                                            <span>{e.theme}</span>
                                            <p>{e.date}</p>
                                        </div>
                                        <div className={styles.row2}>
                                            {e.text}
                                        </div>
                                    </div>

                                    <div className={styles.row3}>
                                        <span><Image src={like} alt='like' />{e.r1}</span>
                                        <span><Image src={dis} alt='dis' />{e.r2}</span>
                                        <span><Image src={po} alt='po' />{e.r3}</span>
                                        <span><Image src={comm} alt='comments' />{e.comms}</span>
                                        <span><Image src={pin} alt='pinned' />{e.pinned}</span>
                                    </div>
                                </div>
                            )
                        })
                    }</>
                </div>
            </div>

            <div className={styles.inc}>
                <div className={styles.firstText}>
                    <p>Происшествия</p>
                    <Image src={more} alt='more' />
                </div>
                <div className={styles.cardsContainer}>
                {
                    itemsThree.map(e => {
                        return (<div className={styles.contLast}>
                            <Image src={e.photo} className={styles.imageLast} alt='picture' />

                            <div className={styles.bottomRow}>
                                <div className={styles.fullRow}>
                                    <div className={styles.row1}>
                                        <p>{e.date}</p>
                                    </div>
                                    <div className={styles.row2}>
                                        {e.text}
                                    </div>
                                </div>

                                <div className={styles.row3}>
                                    <span><Image src={like} alt='like' />{e.r1}</span>
                                    <span><Image src={dis} alt='dis' />{e.r2}</span>
                                    <span><Image src={po} alt='po' />{e.r3}</span>
                                    <span><Image src={comm} alt='comments' />{e.comms}</span>
                                    <span><Image src={pin} alt='pinned' />{e.pinned}</span>
                                </div>
                            </div>

                        </div>)
                    })
                }
                </div>

            </div>
        </main>
    )
}