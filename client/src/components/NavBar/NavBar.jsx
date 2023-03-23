import { Link } from "react-router-dom";
//import CreateActivities from "../CreateActivities/CreateActivities";

const NavBar = () => {
  return (
    <div>
      <Link to="/Home">
        <p>Home</p>
      </Link>
      <Link to="/activities">
        <p>Create an Activity</p>
      </Link>
    </div>
  );
};

export default NavBar;
