import Blogposts from './components/Blogposts';
import IndividualPost from './components/IndividualPost';
import store from './redux/store';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/" component={Blogposts} />
            <Route exact path="/:id" component={IndividualPost} />
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
