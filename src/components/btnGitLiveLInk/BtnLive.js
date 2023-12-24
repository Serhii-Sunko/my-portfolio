import React from "react";
import gitHubIcon from "../btnGitHub/gitHub-black.svg";

const BtnLive = ({ link }) => {
  return (
    <div>
      <a href={link} target="_blank" rel="noreferrer" className="btn-outline">
        <img src={gitHubIcon} alt="" />
        Git Live Page
      </a>
    </div>
  );
};

export default BtnLive;
