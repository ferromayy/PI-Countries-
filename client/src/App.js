import "./App.css";
import { Route, Routes } from "react-router-dom";
import LandingPage from "./components/LandingPage/LandingPage";
import Home from "./components/Home/Home";
import CreateActivity from "./components/CreateActivity/CreateActivity";
import CountryDetail from "./components/CountryDetail/CountryDetail";
import axios from "axios";
axios.defaults.baseURL = "https://pi-countries-production-418f.up.railway.app/";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Activities" element={<CreateActivity />} />
        <Route path="/countries/:id" element={<CountryDetail />} />
      </Routes>
    </div>
  );
};

export default App;
