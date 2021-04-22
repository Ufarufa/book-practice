import logo from "./logo.svg";
import "./App.css";
import { Link, Route, Switch } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Profile from "./Profile";
import Profiles from "./Profiles";

function App() {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">홈</Link>
        </li>
        <li>
          <Link to="/about">소개</Link>
        </li>
        <li>
          <Link to="/profiles">profiles</Link>
        </li>
        <li>
          <Link to="/profile/velopert">velopert</Link>
        </li>
        <li>
          <Link to="/profile/gildong">gildong</Link>
        </li>
      </ul>
      <hr />
      <Switch>
        <Route path="/" component={Home} exact={true}></Route>
        <Route path={["/about", "/info"]} component={About}></Route>
        <Route path={"/profile/:username"} component={Profile}></Route>
        <Route path={"/profiles"} component={Profiles}></Route>
        <Route
          render={() => <div>이 페이지는 존재하지 않습니다. </div>}
        ></Route>
      </Switch>
    </div>
  );
}

export default App;
