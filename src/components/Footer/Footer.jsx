import React from "react";
import "./Footer.scss";

const Footer = () => {
  return (
    <>
      <div className="app__foot">
        <div className="copy">
          <p>Artur Nunes - Todos os direitos reservados</p>
          <p>©️ Copyright 2022</p>
        </div>

        <div className="app__navbar-logo">
          <a href="/">
            Artur<span>Nunes</span>
          </a>
          <p>fullstack developer</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
