import { Link } from "react-router-dom";
import React from "react";

const LandingPage = () => {
  return (
    <div>
      <h1> the Countries App </h1>
      <h2>
        Where the Countries and activities you have been looking for all around
        the world, are together{" "}
      </h2>
      <Link to="/Home">
        <button> Start</button>
      </Link>
    </div>
  );
};

export default LandingPage;
