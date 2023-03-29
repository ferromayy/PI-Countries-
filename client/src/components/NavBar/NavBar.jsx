import { Link } from "react-router-dom";
import style from "./NavBar.module.css";
//import CreateActivities from "../CreateActivities/CreateActivities";

const NavBar = () => {
  return (
    <div className={style.navBar}>
      <Link to="/Home" className={style.botHome}>
        <p>Home</p>
      </Link>
      <Link className={style.botAct} to="/activities">
        <p>Create an Activity</p>
      </Link>
    </div>
  );
};

export default NavBar;
