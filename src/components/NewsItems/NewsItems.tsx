import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { INews, removeNewsItem } from '../../redux/actions';
import styles from './newsItems.module.css';

interface INewsItemData {
    data: INews;
}

export function NewsItems({data}: INewsItemData) {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleClick = () => {
        dispatch(removeNewsItem(data));
        navigate('/news');
    }

    return (
        <section className={styles.section}>
            <h2 className={styles.newsTitle}>{data.title}</h2>
            <span className={styles.newsDate}>{data.publishedAt}</span>
            <p className={styles.newsContent}>{data.content}</p>
            <button 
                className={styles.deleteBtn}
                onClick={handleClick}
            >
                Удалить
            </button>
        </section>
    )
}
