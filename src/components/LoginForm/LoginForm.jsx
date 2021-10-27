import React, { useContext } from "react";
import { useFormik } from "formik";

import { login } from "../../services/login";
import { AuthContext } from "../../contexts/AuthContext";
import { useHistory } from "react-router";
import { authActions } from "../../actions/authActions";

const validate = (values) => {
  const errors = {};
  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Please enter a valid email";
  } else if (values.email !== "challenge@alkemy.org") {
    errors.email = "User not valid";
  }
  if (!values.password) {
    errors.password = "Please enter a valid password";
  }
  return errors;
};

const LoginForm = () => {
  const { dispatch } = useContext(AuthContext);
  const history = useHistory();

  const handleLogin = async (values) => {
    login(values)
      .then((data) => {
        dispatch({
          type: authActions.login,
          payload: { token: data.message.token },
        });
        history.push("/");
      })
      .catch((err) => console.log(err));
  };

  const loginForm = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validate,
    onSubmit: (values) => handleLogin(values),
  });

  return (
    <form noValidate className="login-form" onSubmit={loginForm.handleSubmit}>
      <label htmlFor="email" className="form-label mb-3">
        Email:
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
        <div className="mt-2 mb-2 text-danger">{loginForm.errors.email}</div>
      ) : null}
      <label htmlFor="password" className="form-label mb-3">
        Password:
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
        <div className="mt-2 mb-2 text-danger">{loginForm.errors.password}</div>
      ) : null}
      <button type="submit" className="btn btn-primary mt-3 w-100">
        Login
      </button>
      <div className="mt-5 text-center">
        <p>Email: challenge@alkemy.org</p>
        <p>Password: react</p>
      </div>
    </form>
  );
};

export default LoginForm;
