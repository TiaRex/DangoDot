import React, { useState } from "react";
import defaultUser from "../assets/defaultUser.png";
import "../styles/editProfile.css"; // Ensure this is the correct path to your CSS file

const EditProfile = () => {
  const [profilePicture, setProfilePicture] = useState(defaultUser);
  const [displayName, setDisplayName] = useState("");
  const [message, setMessage] = useState("");

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setProfilePicture(URL.createObjectURL(file));
    }
  };

  const handleNameChange = (event) => {
    setDisplayName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setMessage(`すごい！Your name is ${displayName}! 🥳`);
  };

  return (
    <section className="edit-profile-content">
      <div className="profile-picture-circle">
        <img src={profilePicture} id="profile-picture" alt="Profile" />
        <label htmlFor="file-upload">Change Profile Picture</label>
        <input
          type="file"
          accept="image/*"
          id="file-upload"
          onChange={handleFileChange}
        />
      </div>
      <form onSubmit={handleSubmit} className="profile-form">
        <label htmlFor="display-name">Display Name</label>
        <input
          type="text"
          id="display-name"
          value={displayName}
          onChange={handleNameChange}
          placeholder="Enter your display name"
        />
        <button type="submit" className="save-changes-button">
          Save Changes
        </button>
      </form>
      {message && <p>{message}</p>}
    </section>
  );
};

export default EditProfile;
