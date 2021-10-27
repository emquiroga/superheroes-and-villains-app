import { useState, useContext } from "react";
import { useFormik } from "formik";
import { findHero } from "../../services/findHero";

import SingleCard from "../SingleCard/SingleCard";

import { HeroesContext } from "../../contexts/HeroesContext";
import { heroesActions } from "../../actions/heroesActions";

const validate = (values) => {
  const errors = {};
  if (!values.search) {
    errors.search = "Please enter a name";
  }
  return errors;
};

const SearchForm = () => {
  const [searchHeroes, setSearchHeroes] = useState([]);
  const [teamOfHeroes, dispatch] = useContext(HeroesContext);

  const myForm = useFormik({
    initialValues: {
      search: "",
    },
    validate,
    onSubmit: (values) => {
      findHero(values.search)
        .then((data) => {
          setSearchHeroes(data);
        })
        .catch((err) => console.log(err));
    },
  });

  const handleAddHero = (hero) => {
    const teamSize = teamOfHeroes.length;

    if (teamSize >= 6) {
      alert("Reached maximum number of heroes");
      return;
    }

    const numberOfVillains = teamOfHeroes.filter(
      (hero) => hero.biography.alignment === "bad"
    ).length;
    const isBad = hero.biography.alignment === "bad";

    if (numberOfVillains >= 3 && isBad) {
      alert("Reached maximum number of villains");
      return;
    }

    const numberOfHeroes = teamOfHeroes.filter(
      (hero) => hero.biography.alignment === "good"
    ).length;
    const isGood = hero.biography.alignment === "good";

    if (numberOfHeroes >= 3 && isGood) {
      alert("Reached maximum number of heroes");
      return;
    }

    dispatch({ type: heroesActions.add, payload: hero });
  };

  return (
    <div className="search-container">
      <form className="search-form" noValidate onSubmit={myForm.handleSubmit}>
        <div className="input-group mb-3">
          <label htmlFor="search" className="w-100">
            <input
              name="search"
              id="search"
              value={myForm.values.search}
              type="text"
              onChange={myForm.handleChange}
              placeholder="Search your hero..."
              className="form-control w-100"
              autoComplete="off"
            />
            {myForm.errors.search ? (
              <div className="text-center text-danger mt-2 mb-2">
                {myForm.errors.search}
              </div>
            ) : null}
          </label>
        </div>
        <button type="submit" className="btn btn-info search w-100">
          Search
        </button>
      </form>
      <h2 className="text-center text-info mt-2">Results:</h2>
      {searchHeroes && (
        <div className="row">
          {searchHeroes.map((hero) => (
            <SingleCard
              key={hero.id}
              hero={hero}
              handleAddHero={handleAddHero}
            />
          ))}
        </div>
      )}
      {searchHeroes === null && (
        <div className="alert alert-warning text-center">Heroe not found</div>
      )}
    </div>
  );
};

export default SearchForm;
