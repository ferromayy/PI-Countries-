import NavBar from "../NavBar/NavBar";
import Countries from "../Countries/Countries";
import SearchBar from "../SearchBar/SearchBar";

const Home = () => {
  return (
    <div>
      <div>
        <NavBar />
      </div>
      <div>
        <SearchBar />
      </div>
      <div>
        <Countries />
      </div>
    </div>
  );
};

export default Home;
