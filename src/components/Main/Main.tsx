import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { News } from '../News/News';
import { NewsItems } from '../NewsItems/NewsItems';
import { fetchNews, RootState } from '../../redux/actions';
import { Spinner } from '../Spinner/Spinner';

export function Main() {
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(fetchNews());
    }, [])
    
    const error = useSelector<RootState, boolean | null>(state => state.error);
    const loading = useSelector<RootState, boolean>(state => state.loading);

    return (
        <main>
            {loading &&
                <Spinner />
            }
            {error && !loading &&
                <h2 className="notFound">
                    {error}
                </h2>
            }
            {!error && !loading &&
                <Router>
                    <Routes>
                        <Route path='/news' element={<News />} />
                        <Route path='/news/:title' element={<NewsItems />} />
                        <Route path='*' element={<h2 className="notFound">Page Not Found</h2>} />
                    </Routes>
                </Router>
            }
        </main>
    )
}
