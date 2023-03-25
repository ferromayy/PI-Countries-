const Filters = ({ handleFilter, handleFilterP, handleFilterC }) => {
  return (
    <div>
      <select onChange={(e) => handleFilter(e)}>
        <option value="Asc">Asc</option>
        <option value="Desc">Desc</option>
      </select>
      <select onChange={(e) => handleFilterP(e)}>
        <option value="largerPp">largerPp</option>
        <option value="smallerPp">smallerPp</option>
      </select>

      <select onChange={(e) => handleFilterC(e)}>
        <option value="All">All</option>
        <option value="Africa">Africa</option>
        <option value="North America">North America</option>
        <option value="South America">South America</option>
        <option value="Asia">Asia</option>
        <option value="Oceania">Oceania</option>
        <option value="Europe">Europe</option>
        <option value="antartic">Antartic</option>
      </select>
    </div>
  );
};
export default Filters;
