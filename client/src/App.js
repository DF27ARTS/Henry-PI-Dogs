import { Route } from 'react-router-dom';
import './App.css';
import Detail from './components/Detail/Detail';
import Home from './components/Home/Home';
import LandingPage from './components/Landing-page/LandingPage';

function App() {

  return (
    <div className="App">
      <Route exact path={'/'} >
        <LandingPage/>
      </Route>

      <Route exact path={'/home'}>
        <Home/>
      </Route>

      <Route path={'/detail'} >
        <Detail/>
      </Route>
    </div>
  );
}

export default App;
