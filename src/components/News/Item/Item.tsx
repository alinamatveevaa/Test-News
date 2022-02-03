import styles from './item.module.css';
import { Link } from 'react-router-dom';
import { getNewsItem, INews } from '../../../redux/actions';
import { useDispatch } from 'react-redux';
import { formatDate } from '../../../utils/formatDate';

interface IItem {
    data: INews,
    key: string,
}

export function Item({ data }: IItem) {
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(getNewsItem(data))
    }

    const publishedDate = formatDate(new Date(data.publishedAt));

    return (
        <li className={styles.newsItem}>
            <h2 className={styles.newsTitle} onClick={handleClick}>
                <Link to={`/news/:${data.title}`}>
                    {data.title}
                </Link>
            </h2>
            <span className={styles.newsDate}>
                {`${publishedDate.month + ' ' + publishedDate.date + ', ' + publishedDate.year}`}
            </span>
            <span className={styles.newsDate}>
                {`${publishedDate.day}`}
            </span>
            <p className={styles.newsDescr}>{data.description}</p>
        </li>
    )
}
