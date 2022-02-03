import { INews } from '../../redux/actions';
import { Item } from './Item/Item';
import {v4 as uuidv4} from 'uuid';

interface INewsData {
    data: INews[]
}

export function News({data}: INewsData) {
    return (
        <section>
            <ul>
                {data.map((item: INews) => {
                    return <Item key={uuidv4()} data={item} />
                })}
            </ul>
        </section>
    )
}
