import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { INews, removeNewsItem, RootState } from '../../redux/actions';
import styles from './newsItems.module.css';

export function NewsItems() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const news = useSelector<RootState, INews[]>(state => state.news);    
    const newsTitle = useParams().title;
    const newsUrl = newsTitle?.split('').slice(1).join('');

    const item = news.filter((item: INews) => {
        return newsUrl === item.title ? item : null;
    })

    const newsItem = item[0];

    const handleClick = () => {
        dispatch(removeNewsItem(newsItem))
        navigate('/news');
    }

    return (
        <section className={styles.section}>
            <h2 className={styles.newsTitle}>{newsItem.title}</h2>
            <span
                className={styles.newsDate}>
                {`${newsItem.publishedAt.month} 
                ${newsItem.publishedAt.date}
                ${newsItem.publishedAt.year},
                ${newsItem.publishedAt.day}`}
            </span>
            <p className={styles.newsContent}>{newsItem.content}</p>
            <button 
                className={styles.deleteBtn}
                onClick={handleClick}
            >
                Удалить
            </button>
        </section>
    )
}
