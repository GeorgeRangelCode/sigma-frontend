import React from "react";
import sigmaImage from "../assets/static/sigma-image.png";
import { RegistrationForm } from "./RegistrationForm";

export const Content = ({ departments, data }) => {
  return (
    <div className="container">
      <div className="row mx-2 mb-5">
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 my-2 mt-5">
          <img className="img-fluid" src={sigmaImage} alt="sigma imagen" />
        </div>
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 my-2">
          <RegistrationForm departments={departments} data={data} />
        </div>
      </div>
    </div>
  );
};
