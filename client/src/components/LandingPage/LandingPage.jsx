import { Link } from "react-router-dom";
import React from "react";
import style from "./LandingPage.module.css";
const LandingPage = () => {
  return (
    <div className={style.conPrin}>
      <h1 className={style.welcomeText}> The Countries App </h1>

      <Link to="/Home">
        <button className={style.boton}> Start</button>
      </Link>
    </div>
  );
};

export default LandingPage;
