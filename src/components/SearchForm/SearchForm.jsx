import { useEffect, useState } from "react";
import { useFormik } from "formik";
import { searchValidation } from "../../helpers/SearchValidations";
import { findHero } from "../../services/FindHero";

import Card from "../Cards/Card";

const SearchForm = () => {
  const [heroes, setHeroes] = useState([]);
  const [team, setTeam] = useState([]);
  useEffect(() => {
    localStorage.setItem("heroes", JSON.stringify(team));
  }, [team]);
  const handleAdd = ({ heroName, url, heroID, stats, side }) => {
    let newMember = {
      heroName,
      url,
      heroID,
      stats,
      side,
    };
    setTeam([...team, newMember]);
    return team;
  };

  // console.log(team);
  const myForm = useFormik({
    initialValues: {
      search: "",
    },
    searchValidation,
    onSubmit: (values) => {
      findHero(setHeroes, values.search);
    },
  });
  return (
    <>
      <form noValidate onSubmit={myForm.handleSubmit}>
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
            {myForm.errors.search ? <div>{myForm.errors.search}</div> : null}
          </label>
        </div>
        <button type="submit" className="btn btn-info search w-100">
          Search
        </button>
      </form>
      <h2 className="text-center">Results</h2>
      <div className="row">
        {heroes.map((heroe) => (
          <Card key={heroe.heroID} {...heroe} />
        ))}
        {heroes.length === 0 && (
          <div className="alert alert-warning text-center">Heroe not found</div>
        )}
      </div>
    </>
  );
};

export default SearchForm;
