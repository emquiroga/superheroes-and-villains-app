import { useState } from "react";
import { useFormik } from "formik";
import { findHero } from "../../services/findHero";
import { handleAddHero } from "../../helpers/handleAddHero";

import Cards from "../Cards/Cards";

const validate = (values) => {
  const errors = {};
  if (!values.search) {
    errors.search = "Please enter a name";
  }
  return errors;
};

const SearchForm = () => {
  const [heroes, setHeroes] = useState([]);
  console.log(heroes);
  const myForm = useFormik({
    initialValues: {
      search: "",
    },
    validate,
    onSubmit: (values) => {
      findHero(setHeroes, values.search);
    },
  });
  return (
    <>
      {" "}
      <hr />
      <form className="login-form" noValidate onSubmit={myForm.handleSubmit}>
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
      <hr />
      {heroes && (
        <div className="row">
          {" "}
          <h2 className="text-center mt-2">Results</h2>{" "}
          <Cards heroes={heroes} handleAddHero={handleAddHero} />{" "}
        </div>
      )}
      {heroes === undefined && (
        <div className="alert alert-warning text-center">Heroe not found</div>
      )}
    </>
  );
};

export default SearchForm;
