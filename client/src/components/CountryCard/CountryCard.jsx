const CountryCard = ({ img, name, continent }) => {
  return (
    <div>
      <h3>{name}</h3>
      <h4>{continent}</h4>
      <img src={img} alt="not received" />
    </div>
  );
};

export default CountryCard;
