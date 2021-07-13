import './App.css';
import bookmark from './bookmark.png'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom';
import Aathiyagamam from './ஆதியாகமம்c1';
import exodus from './exodus';
import home from './home';
import TodosComponent from './todo';
function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Router>
           <div className="App">
            <ul className="App-header">
            <li>
                <Link className="App-link-home" to="/">Home</Link>
              </li>
              <li>
                <Link className="App-link-home" to="/ஆதியாகமம்">ஆதியாகமம்</Link>
              </li>
              <li>
                <Link className="App-link-home" to="/ஆதியாகமம்-2">exodus</Link>
              </li>
                <Link className="App-link" to="/bookmarks"><img src={bookmark} width="50px" height="20px" ></img>&ensp; bookmarks &ensp;</Link>
            </ul>
            <Switch>
            <Route exact path='/ஆதியாகமம்' component={Aathiyagamam}></Route>  
            <Route exact path='/ஆதியாகமம்-2' component={exodus}></Route>
            <Route exact path='/' component={home}></Route>
            <Route exact path='/bookmarks' component={TodosComponent}></Route>
            </Switch>
           
          </div>
       </Router>
      </header>
      <footer className="App-footer" >
      &copy; @ Bible 2021-2022
      </footer>
    </div>
  );
}

export default App;
