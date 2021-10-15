import Blogposts from './components/Blogposts';
import store from './redux/store';
import { Provider } from 'react-redux';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Blogposts />
      </div>
    </Provider>
  );
}

export default App;
