import { Provider } from 'react-redux';
import { Main } from './Main/Main';
import { store } from '../redux/index';

function App() {
  return (
    <Provider store={store}>
      <h1 className='mainTitle'>News List</h1>
      <Main />
    </Provider>
  );
}

export default App;
