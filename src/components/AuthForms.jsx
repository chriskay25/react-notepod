import React, { useState } from "react";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";
import userIcon from "../assets/blue-user-icon.png";

const AuthForms = () => {
  const [form, setForm] = useState("login");

  const toggleForm = () => {
    setForm(form === "login" ? "signup" : "login");
  };

  return (
    <div className="auth-forms">
      <div className="auth-forms-container">
        <div style={{ display: "flex", justifyContent: "center" }}>
          <img style={{ margin: "20px auto" }} src={userIcon} alt="user-icon" />
        </div>
        {form === "login" && <LoginForm />}
        {form === "signup" && <SignupForm />}
        <button className="form-switch-bttn" onClick={() => toggleForm()}>
          {form === "login" ? "Sign Up" : "Log In"}
        </button>
      </div>
    </div>
  );
};

export default AuthForms;
