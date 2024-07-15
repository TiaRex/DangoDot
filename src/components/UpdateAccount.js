import React, { useState } from "react";
import "../styles/updateAccount.css"; // Ensure this is the correct path to your CSS file

const UpdateAccount = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState({
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
  });
  const [confirmationMessage, setConfirmationMessage] = useState("");

  const validateUsername = (username) => {
    const usernameRegex = /^[a-zA-Z0-9._-]{1,26}$/;
    return usernameRegex.test(username);
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password) => {
    const passwordRegex = /^[a-zA-Z0-9!@#$%^&*()_+={}|:;<>,.?/~`-]{1,26}$/;
    return passwordRegex.test(password);
  };

  const handleUsernameChange = (e) => {
    const value = e.target.value;
    setUsername(value);
    if (!validateUsername(value)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        username: "Invalid username",
      }));
    } else {
      setErrors((prevErrors) => ({ ...prevErrors, username: "" }));
    }
  };

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);
    if (!validateEmail(value)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: "Invalid email address",
      }));
    } else {
      setErrors((prevErrors) => ({ ...prevErrors, email: "" }));
    }
  };

  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);
    if (!validatePassword(value)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        password: "Invalid password",
      }));
    } else {
      setErrors((prevErrors) => ({ ...prevErrors, password: "" }));
    }
  };

  const handleConfirmPasswordChange = (e) => {
    const value = e.target.value;
    setConfirmPassword(value);
    if (value !== password) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        confirmPassword: "Passwords do not match!",
      }));
    } else {
      setErrors((prevErrors) => ({ ...prevErrors, confirmPassword: "" }));
    }
  };

  const handleConfirmPasswordBlur = (e) => {
    const value = e.target.value;
    if (!value) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        confirmPassword: "Re-enter password.",
      }));
    } else if (value !== password) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        confirmPassword: "Passwords do not match!",
      }));
    } else {
      setErrors((prevErrors) => ({ ...prevErrors, confirmPassword: "" }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !errors.username &&
      !errors.email &&
      !errors.password &&
      !errors.confirmPassword
    ) {
      setConfirmationMessage(`すごい！ Your account has been updated! 🥳`);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="update-account-form">
      <div className="form-group">
        <label htmlFor="username">You are known far and wide as . . .</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={handleUsernameChange}
          placeholder="Username"
          maxLength="26"
          required
        />
        {errors.username && <p className="error">{errors.username}</p>}
      </div>
      <div className="form-group">
        <label htmlFor="email">What's your email?</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={handleEmailChange}
          placeholder="Email"
          required
        />
        {errors.email && <p className="error">{errors.email}</p>}
      </div>
      <div className="form-group-horizontal">
        <div className="form-group">
          <label htmlFor="password">Password?</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
            placeholder="Enter Password"
            maxLength="26"
            required
          />
          {errors.password && <p className="error">{errors.password}</p>}
        </div>
        <div className="form-group">
          <label htmlFor="confirm-password">Don't forget!</label>
          <input
            type="password"
            id="confirm-password"
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
            onBlur={handleConfirmPasswordBlur}
            placeholder="Confirm Password"
            maxLength="26"
            required
          />
          {errors.confirmPassword && (
            <p className="error">{errors.confirmPassword}</p>
          )}
        </div>
      </div>
      <button type="submit" className="save-changes-button">
        Save Changes
      </button>
      {confirmationMessage && (
        <p className="confirmation-message">{confirmationMessage}</p>
      )}
    </form>
  );
};

export default UpdateAccount;
