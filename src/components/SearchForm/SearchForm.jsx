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
  const searchForm = useFormik({
    initialValues: {
      search: "",
    },
    validate,
    onSubmit: (values) => {
      findHero(values.search).then((data) => {
        setSearchHeroes(data);
      });
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
    <div className="form-container">
      <form
        className="search-form"
        noValidate
        onSubmit={searchForm.handleSubmit}
      >
        <div className="input-group mb-3">
          <label htmlFor="search" className="w-100">
            <input
              name="search"
              id="search"
              value={searchForm.values.search}
              type="text"
              onChange={searchForm.handleChange}
              placeholder="Search your hero..."
              className="form-control w-100"
              autoComplete="off"
            />
            {searchForm.errors.search ? (
              <div className="text-center required-alert mt-2 mb-2">
                {searchForm.errors.search}
              </div>
            ) : null}
          </label>
        </div>
        <button
          type="submit"
          className={
            searchForm.errors.search ? "btn-1 mt-3 btn-disabled" : "btn-1 mt-3"
          }
          disabled={Boolean(searchForm.errors.search)}
        >
          Search
        </button>
      </form>
      <div className="container-fluid">
        <h2 className="sub-title">Results:</h2>
        {searchHeroes.length > 1 && (
          <div className="heroes-grid">
            {searchHeroes.map((hero) => (
              <SingleCard
                key={hero.id}
                hero={hero}
                handleAddHero={handleAddHero}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchForm;
