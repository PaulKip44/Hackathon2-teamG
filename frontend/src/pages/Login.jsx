/* eslint-disable jsx-a11y/label-has-associated-control */
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import api from "../services/endpoint";

import logo from "../assets/logo.png";

import "./Login.css";
import "react-toastify/dist/ReactToastify.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && password) {
      api
        .post("auth/login", { email, password })
        .then(() => {
          toast.success("Vous êtes connecté !");
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
    <div className="login">
      <div className="login-form">
        <img src={logo} className="logo-img" alt="logo" />
        <div className="title">Welcome</div>
        {renderForm}
      </div>
    </div>
  );
}
export default Login;
