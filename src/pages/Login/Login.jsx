import React, { useContext, useState } from "react";
import { useFormik } from "formik";
import axios from "axios";

// import { login } from "../../services/login";
import { AuthContext } from "../../contexts/AuthContext";
import { useHistory } from "react-router";
import { authActions } from "../../actions/authActions";

const { REACT_APP_POST_URL } = process.env;

const validate = (values) => {
  const errors = {};
  if (!values.email) {
    errors.email = "The field email is required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Please enter a valid email";
  }

  if (!values.password) {
    errors.password = "Please enter a password";
  } else if (!/[a-zA-ZÀ-ÿ\s]$/.test(values.password)) {
    errors.password = "Invalid password";
  }
  return errors;
};

const Login = () => {
  const [error, setError] = useState(null);
  const { dispatch } = useContext(AuthContext);
  const history = useHistory();

  function login({ email, password }) {
    axios
      .post(REACT_APP_POST_URL, {
        email: email,
        password: password,
      })
      .then((res) => {
        const { data } = res;
        dispatch({
          type: authActions.login,
          payload: { token: data.token },
        });
        history.push("/");
      })
      .catch((error) => setError(error));
  }

  function handleLogin(values) {
    login(values);
  }

  function handleReset() {
    history.replace("/login");
  }

  const loginForm = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validate,
    onSubmit: (values) => handleLogin(values),
  });

  if (error) {
    return (
      <section className="login-page">
        <div className="container mt-3">
          <div role="alert" className="alert alert-danger">
            There was an error:{" "}
            <pre style={{ whiteSpace: "normal" }}>{error.message}</pre>
            <button className="btn btn-danger" onClick={handleReset}>
              Go back
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="login-page">
      <div className="form-container">
        <form
          noValidate
          className="login__form"
          onSubmit={loginForm.handleSubmit}
        >
          <div className="form-group">
            <h1 className="main-title">Welcome</h1>
          </div>
          <div className="form-group">
            <label htmlFor="email" className="form-label mb-3">
              <span className="required-alert">*</span> Email:
            </label>
            <input
              type="email"
              name="email"
              id="email"
              autoComplete="off"
              onChange={loginForm.handleChange}
              value={loginForm.values.email}
              className="form-control mb-3 "
            />
            {loginForm.errors.email ? (
              <div className="mt-2 mb-2 required-alert">
                {loginForm.errors.email}
              </div>
            ) : null}
          </div>
          <div className="form-group">
            <label htmlFor="password" className="form-label mb-3">
              <span className="required-alert">*</span> Password:
            </label>
            <input
              type="password"
              name="password"
              id="password"
              onChange={loginForm.handleChange}
              value={loginForm.values.password}
              className="form-control mb-3 "
            />
            {loginForm.errors.password ? (
              <div className="mt-2 mb-2 required-alert">
                {loginForm.errors.password}
              </div>
            ) : null}
          </div>
          <button
            type="submit"
            className={
              loginForm.errors.email || loginForm.errors.password
                ? "btn-3 mt-3 btn-disabled"
                : "btn-3 mt-3"
            }
            disabled={Boolean(
              loginForm.errors.email || loginForm.errors.password
            )}
          >
            Login
          </button>
        </form>
      </div>
    </section>
  );
};

export default Login;
