const Filters = ({ handleFilter, handleFilterP }) => {
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

      <select>
        <option>Africa</option>
        <option>North America</option>
        <option>South America</option>
        <option>Asia</option>
        <option>Oceania</option>
        <option>Europe</option>
        <option>Antartic</option>
      </select>
    </div>
  );
};
export default Filters;
