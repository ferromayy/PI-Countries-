import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postActivity, getAllCountries } from "../../redux/actions";

const CreateActivity = () => {
  const dispatch = useDispatch();
  const countries = useSelector((state) => state.countries);

  const [input, setInput] = useState({
    name: "",
    difficulty: "",
    duration: "",
    season: "",
    countries: [],
  });

  useEffect(() => {
    dispatch(getAllCountries());
  }, [dispatch]);

  const handleChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };
  console.log(input);

  const handleSelect = (e) => {
    setInput((input) => {
      if (e.target.name === "countries") {
        return {
          ...input,
          countries: [...input.countries, e.target.value],
        };
      } else {
        return {
          ...input,
          [e.target.name]: e.target.value,
        };
      }
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(input);
    dispatch(postActivity(input));
    alert("The activity has been created");
    setInput({
      name: "",
      difficulty: "",
      duration: "",
      season: "",
      countries: [],
    });
  };

  return (
    <div>
      <h1>Create Activity</h1>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            value={input.name}
            name="name"
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div>
          <label>Difficulty:</label>
          <input
            type="number"
            value={input.difficulty}
            name="difficulty"
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div>
          <label>Duration:</label>
          <input
            type="number"
            value={input.duration}
            name="duration"
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div>
          <label>Season</label>
          <select name="season" id="season" onChange={(e) => handleSelect(e)}>
            <option value="empty"></option>
            <option value="Summer">Summer</option>
            <option value="Fall">Fall</option>
            <option value="Winter">Winter</option>
            <option value="Spring">Spring</option>
          </select>
        </div>
        <div>
          <label>Select country</label>
          <select
            name="countries"
            id="countries"
            onChange={(e) => handleSelect(e)}
          >
            <option value="empty"></option>
            {countries?.map((el) => (
              <option value={el.id}>{el.name}</option>
            ))}
          </select>
        </div>
        <div>
          <ul>
            <li>{input.countries?.map((e) => e + " ,")}</li>
          </ul>
        </div>
        <div>
          <button type="submit">Create Activity </button>
        </div>
      </form>
    </div>
  );
};

export default CreateActivity;

// fijarse si no influye que difficulty  o duration sean string en el back, y si la union de activities y countries en el back no arruina todo

// **📍 FORM PAGE |**: en esta vista se encontrará el formulario para crear una actividad turística.

// Este formulario debe ser **controlado completamente con JavaScritp**. No se pueden utilizar validaciones HTML, ni utilizar librerías especiales para esto. Debe contar con los siguientes campos:

// -  Nombre.
// -  Dificultad.
// -  Duración.
// -  Temporada.
// -  Posibilidad de seleccionar/agregar varios países en simultáneo.
// -  Botón para crear la actividad turística.

// > [**IMPORANTE**]: es requisito que el formulario de creación esté validado sólo con JavaScript. Puedes agregar las validaciones que consideres. Por ejemplo: que el nombre de la actividad no pueda contener números, o que la duración no pueda exceder determinado valor, etc.
