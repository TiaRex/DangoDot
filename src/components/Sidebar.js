import React from "react";
import { Link } from "react-router-dom";
import Dangologo from "../assets/Dangologo.png";
import "../styles/sidebar.css";

const Sidebar = ({ onContentChange }) => (
  <section className="sidebar-container">
    <div className="logo">
      <Link to="/home">
        <img src={Dangologo} alt="DangoDot Logo" />
        <h1>DangoDot</h1>
      </Link>
    </div>

    <h3>Profile Settings</h3>
    <div className="sidebar-list">
      <a
        href="#/"
        className="sidebar-item"
        onClick={() => onContentChange("EditProfile")}
      >
        Edit Profile
      </a>
    </div>

    <h3>Account Settings</h3>
    <div className="sidebar-list">
      <a
        href="#/"
        className="sidebar-item"
        onClick={() => onContentChange("UpdateAccount")}
      >
        Update Account
      </a>
      <a
        href="#/"
        className="sidebar-item"
        onClick={() => onContentChange("Language")}
      >
        Language
      </a>
      <a
        href="#/"
        className="sidebar-item"
        onClick={() => onContentChange("Theme")}
      >
        Theme
      </a>
    </div>
  </section>
);

export default Sidebar;
