// @ts-ignore
import  {useSelector}  from 'react-redux';
import { INews, RootState } from '../../redux/actions';
import { Item } from './Item/Item';

export function News() {
    const news = useSelector<RootState, INews[]>(state => state.news);
    
    return (
        <section>
            <ul>
                {news.map((item: INews, index: number) => {
                    return <Item key={item.url} index={index} data={item} />
                })}
            </ul>
        </section>
    )
}
