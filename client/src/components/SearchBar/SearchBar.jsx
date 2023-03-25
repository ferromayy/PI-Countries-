import { useState } from "react";
import { useDispatch } from "react-redux";
import { searchCountry } from "../../redux/actions";

const SearchBar = () => {
  const [name, setName] = useState("");
  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    e.preventDefault();
    setName(e.target.value);
    console.log(name);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(searchCountry(name));
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        onChange={(e) => handleInputChange(e)}
      />
      <button type="submit" onClick={(e) => handleSubmit(e)}>
        Search
      </button>
    </div>
  );
};
export default SearchBar;
