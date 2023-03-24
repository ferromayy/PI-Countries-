const Filters = () => {
  return (
    <div>
      <select>
        <option value="Asc">ASC</option>
        <option value="Desc">DESC</option>
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
