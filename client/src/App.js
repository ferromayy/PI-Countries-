import "./App.css";
import { Route, Routes } from "react-router-dom";
import LandingPage from "./components/LandingPage/LandingPage";
import Home from "./components/Home/Home";
import CreateActivity from "./components/CreateActivity/CreateActivity";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Activities" element={<CreateActivity />} />
      </Routes>
    </div>
  );
};

export default App;
