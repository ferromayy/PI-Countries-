import style from "./Filters.module.css";
const Filters = ({ handleFilter, handleFilterP, handleFilterC }) => {
  return (
    <div>
      <select className={style.botonAsc} onChange={(e) => handleFilter(e)}>
        <option value="Asc">A-Z</option>
        <option value="Desc">Z-A</option>
      </select>
      <select
        className={style.botonLargerPp}
        onChange={(e) => handleFilterP(e)}
      >
        <option value="largerPp">largerPp</option>
        <option value="smallerPp">smallerPp</option>
      </select>

      <select
        className={style.botonContinents}
        onChange={(e) => handleFilterC(e)}
      >
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
