import "./style.css";
import React from "react";
import link from "./../../img/icons/link.svg";
import insta from "./../../img/icons/insta.svg";
import git from "./../../img/icons/git.svg";

export default function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="container">
          <div className="footer__wrapper">
            <ul className="social">
              <li className="social__item">
                <a href="#=" target={"blank"}>
                  <img src={insta} alt="insta" />
                </a>
              </li>
              <li className="social__item">
                <a href="https://github.com/Serhii-Sunko" target={"blank"}>
                  <img src={git} alt="git" />
                </a>
              </li>
              <li className="social__item">
                <a
                  href="https://www.linkedin.com/in/serhii-sunko/"
                  target={"blank"}
                >
                  <img src={link} alt="link" />
                </a>
              </li>
            </ul>
            <div className="copyright">
              <p>© 2023 serhii sunko</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
