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
      <ul className="pag">
        {pageNumbers &&
          pageNumbers.map((number) => {
            return (
              <li className="number" key={number}>
                <span onClick={() => pag(number)}>{number} </span>
              </li>
            );
          })}
      </ul>
    </nav>
  );
};

export default Pagination;
