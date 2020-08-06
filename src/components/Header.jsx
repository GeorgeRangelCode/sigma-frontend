import React from "react";
import "../assets/styles/components/Header.scss";
import logo from "../assets/static/sigma-logo.png";

export const Header = () => {
  return (
    <section className="header mt-5 mb-md-5">
      <div className="container header__content">
        <img className="header__img" src={logo} alt="Sigma Logo" />
        <div className="header__content mt-5">
          <h1 className="header__title h1">Prueba de desarrollo Sigma</h1>
          <p className="header__paragraph h5 mt-3 mx-md-5">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standand dummy text
            ever since the 1500s, when an unknown printer took a galley of tupe
            and scrambled it to make a tupe specimen book.
          </p>
        </div>
      </div>
    </section>
  );
};
