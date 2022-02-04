import styles from './item.module.css';
import { Link } from 'react-router-dom';
import { INews } from '../../../redux/actions';

interface IItem {
    data: INews,
    key: string,
    index: number,
}

export function Item({ data }: IItem) {
    return (
        <li className={styles.newsItem}>
            <h2 className={styles.newsTitle}>
                <Link to={`/news/:${data.title}`}>
                    {data.title}
                </Link>
            </h2>
            <span className={styles.newsDate}>
                {`${data.publishedAt.month} ${data.publishedAt.date} ${data.publishedAt.year}`}
            </span>
            <span className={styles.newsDate}>
                {`${data.publishedAt.day}`}
            </span>
            <p className={styles.newsDescr}>{data.description}</p>
        </li>
    )
}
