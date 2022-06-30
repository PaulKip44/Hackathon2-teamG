/* eslint-disable jsx-a11y/label-has-associated-control */
import { useState, useContext } from "react";

import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import CurrentUserContext from "../context/userContext";

import logo from "../assets/logo-apside.png";

import api from "../services/endpoint";

import "./Login.css";
import "react-toastify/dist/ReactToastify.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const { setUser } = useContext(CurrentUserContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && password) {
      api
        .post("auth/login", { email, password })
        .then((res) => {
          toast.success("Vous êtes connecté !");
          setUser(res.data);
          localStorage.setItem("user", JSON.stringify(res.data));
          navigate("/dashboard");
        })
        .catch(() =>
          toast.warning("Votre email ou votre mot de passe est faux")
        );
    }
    if (email && !password) {
      toast.warning("Merci de renseigner votre mot de passe");
    }
    if (!email && password) {
      toast.warning("Merci de renseigner votre email");
    }
  };

  const renderForm = (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label>Username </label>
          <input
            className="input-user"
            onChange={(e) => setEmail(e.target.value)}
            type="text"
            name="uname"
          />
        </div>
        <div className="input-container">
          <label>Password </label>
          <input
            className="input-password"
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            name="pass"
          />
        </div>
        <div className="button-container">
          <input type="submit" />
        </div>
      </form>
    </div>
  );

  return (
    <div className="container-login">
      <div className="login">
        <div className="login-form">
          <img src={logo} className="logo-img" alt="logo" />
          {renderForm}
        </div>
      </div>
    </div>
  );
}
export default Login;
