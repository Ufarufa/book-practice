import { Link, NavLink, Route } from "react-router-dom";
import Profile from "./Profile";

function Profiles() {
  return (
    <div>
      <h3>사용자 목록</h3>
      <ul>
        <li>
          <NavLink
            activeStyle={{ background: "black", color: "white" }}
            to="/profiles/velopert"
          >
            velopert
          </NavLink>
        </li>
        <li>
          <Link to="/profiles/gildong">gildong</Link>
        </li>
      </ul>
      <Route
        path="/profiles"
        exact
        render={() => <div> 사용자를 선택해주세요 </div>}
      ></Route>
      <Route path="/profiles/:username" component={Profile}></Route>
    </div>
  );
}

export default Profiles;
