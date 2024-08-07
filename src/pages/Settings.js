import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import EditProfile from "../components/EditProfile";
import UpdateAccount from "../components/UpdateAccount";
import "../styles/settings.css";

const Settings = () => {
  const [content, setContent] = useState(
    "Nothing here? Check out the sidebar!"
  );

  const renderContent = () => {
    switch (content) {
      case "EditProfile":
        return <EditProfile />;
      case "UpdateAccount":
        return <UpdateAccount />;
      case "Language":
        return <div>Language content goes here.</div>;
      case "Theme":
        return <div>Theme content goes here.</div>;
      default:
        return <p>{content}</p>;
    }
  };

  return (
    <div className="settings-page">
     
      <div className="wrapper">
        <Sidebar onContentChange={setContent} />
        <section className="content-container">
          <div className="content">
            <h1>Settings</h1>
            {renderContent()}
          </div>
        </section>
      </div>
  
    </div>
  );
};

export default Settings;
