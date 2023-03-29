import style from "./Pagination.module.css";

const Pagination = ({ countriesPerPage, allCountries, pag }) => {
  const pageNumbers = [];
  const pageCountries = Math.ceil(allCountries / countriesPerPage);
  console.log(pageCountries);
  for (let i = 1; i <= pageCountries; i++) {
    pageNumbers.push(i);
  }
  console.log(pageNumbers);

  return (
    <nav>
      <ul className={style.paginationUl}>
        {pageNumbers &&
          pageNumbers.map((number) => {
            return (
              <button
                className={style.paginationButton}
                key={number}
                onClick={() => pag(number)}
              >
                {number}
              </button>
            );
          })}
      </ul>
    </nav>
  );
};

export default Pagination;
