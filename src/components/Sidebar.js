import React from "react";
import { Link } from "react-router-dom";
import Dangologo from "../assets/Dangologo.png";
import "../styles/sidebar.css";

const Sidebar = ({ onContentChange, renderProfilePictureContent }) => (
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
        href="#"
        className="sidebar-item"
        onClick={() => onContentChange(renderProfilePictureContent())}
      >
        Edit Profile
      </a>
    </div>

    <h3>Account Settings</h3>
    <div className="sidebar-list">
      <a
        href="#"
        className="sidebar-item"
        onClick={() => onContentChange("Username/Password content goes here.")}
      >
        Update Account
      </a>
      <a
        href="#"
        className="sidebar-item"
        onClick={() => onContentChange("Language content goes here.")}
      >
        Notifications
      </a>
    </div>
  </section>
);

export default Sidebar;
