import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postActivity, getAllCountries } from "../../redux/actions";
import NavBar from "../NavBar/NavBar";
import style from "./CreateActivity.module.css";

const validation = (input) => {
  let errors = {};

  let dif = Number(input.difficulty);
  let dur = Number(input.duration);

  if (!input.name) errors.name = "required space";
  if (!/^[a-zA-Z]+$/.test(input.name))
    errors.name = "Name can not have special characters or accents";

  if (!input.difficulty) errors.difficulty = "required space";
  else if (dif <= 0 || dif > 5) errors.difficulty = "Should be between 1 and 5";

  if (!input.duration) errors.duration = "required space";
  else if (dur <= 0 || dur > 24) errors.duration = "Should be between 1 and 24";

  if (!input.season || input.season === "empty")
    errors.season = "required space";

  if (!input.countries || input.countries.length === 0)
    errors.countries = "required space";

  return errors;
};

const CreateActivity = () => {
  const dispatch = useDispatch();
  const countries = useSelector((state) => state.countries);
  const [errors, setErrors] = useState({});
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
    setErrors(
      validation({
        ...input,
        [e.target.name]: e.target.value,
      })
    );
  };
  console.log(input);

  const handleSelect = (e) => {
    setInput((input) => {
      if (e.target.name === "countries") {
        return {
          ...input,
          countries: [...new Set([...input.countries, e.target.value])],
        };
      } else {
        return {
          ...input,
          [e.target.name]: e.target.value,
        };
      }
    });
    setErrors(
      validation({
        ...input,
        [e.target.name]: e.target.value,
      })
    );
  };

  const handleDelete = (e) => {
    setInput({
      ...input,
      countries: input.countries.filter((con) => con !== e),
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(input);
    if (
      !input.name ||
      !input.difficulty ||
      !input.duration ||
      !input.season ||
      !input.countries
    ) {
      return alert("Complete the form correctly before submitting it");
    }

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
      <div>
        <NavBar />
      </div>
      <div className={style.centrar}>
        <div className={style.contenedorform}>
          <h1 className={style.titulo}>Create Activity</h1>

          <form className={style.form} onSubmit={(e) => handleSubmit(e)}>
            <div>
              <label className={style.campos}>Name:</label>
              <input
                className={style.inputs}
                type="text"
                value={input.name}
                name="name"
                onChange={(e) => handleChange(e)}
              />
              {errors.name && <p>{errors.name}</p>}
            </div>

            <div>
              <label className={style.campos}>Difficulty:</label>
              <input
                className={style.inputs}
                type="number"
                value={input.difficulty}
                name="difficulty"
                onChange={(e) => handleChange(e)}
              />
              {errors.difficulty && <p>{errors.difficulty}</p>}
            </div>

            <div>
              <label className={style.campos}>Duration:</label>
              <input
                className={style.inputs}
                type="number"
                value={input.duration}
                name="duration"
                onChange={(e) => handleChange(e)}
              />
              {errors.duration && <p>{errors.duration}</p>}
            </div>

            <div>
              <label className={style.campos}>Season</label>
              <select
                className={style.inputs}
                name="season"
                id="season"
                onChange={(e) => handleSelect(e)}
              >
                <option value="empty"></option>
                <option value="Summer">Summer</option>
                <option value="Fall">Fall</option>
                <option value="Winter">Winter</option>
                <option value="Spring">Spring</option>
              </select>
              {errors.season && <p>{errors.season}</p>}
            </div>

            <div>
              <label className={style.campos}>Select country</label>
              <select
                className={style.inputs}
                name="countries"
                id="countries"
                onChange={(e) => handleSelect(e)}
              >
                <option value="empty"></option>
                {countries?.map((el) => (
                  <option value={el.id}>{el.name}</option>
                ))}
              </select>
              {errors.countries && <p>{errors.countries}</p>}
            </div>

            <div>
              {input.countries?.map((e) => (
                <div>
                  <p> {e} </p>
                  <button
                    className={style.botelim}
                    onClick={() => handleDelete(e)}
                  >
                    X{" "}
                  </button>
                </div>
              ))}
            </div>

            <button className={style.botonCreate} type="submit">
              Create Activity{" "}
            </button>
          </form>
        </div>
      </div>
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
