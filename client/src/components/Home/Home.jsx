import NavBar from "../NavBar/NavBar";
import Countries from "../Countries/Countries";
import Filters from "../Filters/Filters";

const Home = () => {
  return (
    <div>
      <div>
        <NavBar />
      </div>
      <div>
        <Filters />
      </div>
      <div>
        <Countries />
      </div>
    </div>
  );
};

export default Home;
