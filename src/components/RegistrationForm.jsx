import React from "react";
import "../assets/styles/components/RegistrationForm.scss";
import { Formik, Form, Field } from "formik";
import { ContactSchema } from "../schema/ContactSchema";
import api from "../service/createContact";
import Swal from "sweetalert2";

export const RegistrationForm = ({ departments, data }) => {
  return (
    <Formik
      initialValues={{
        state: "",
        city: "",
        name: "",
        email: "",
      }}
      validationSchema={ContactSchema}
      onSubmit={async (values, actions) => {
        try {
          await api.contacts.create(values);
          Swal.fire({
            title: "Registro exitoso",
            text:
              "Tu registro ha sido guardado con éxito pronto te contactaremos.",
          });
          actions.resetForm();
        } catch (error) {
          console.log("RegistrationForm -> error", error);
        }
      }}
    >
      {({ errors, touched, isSubmitting, values }) => (
        <Form className="form-registration">
          <div className="form-group">
            <label htmlFor="department" className="font-weight-bold">
              Departamento*
            </label>
            <Field
              as="select"
              className="form-control"
              id="department"
              name="state"
            >
              <option value="" disabled>
                Seleccione departamento
              </option>
              {departments.map((department, index) => (
                <option key={index} value={department}>
                  {department}
                </option>
              ))}
            </Field>
            {errors.state && touched.state ? (
              <small className="form-text text-danger">{errors.state}</small>
            ) : null}
          </div>

          <div className="form-group">
            <label htmlFor="city" className="font-weight-bold">
              Ciudad*
            </label>
            <Field as="select" className="form-control" id="city" name="city">
              <option value="" disabled>
                Seleccione ciudad
              </option>
              {!!values.state &&
                data[values.state].map((city, index) => (
                  <option key={index} value={city}>
                    {city}
                  </option>
                ))}
            </Field>
            {errors.city && touched.city ? (
              <small className="form-text text-danger">{errors.city}</small>
            ) : null}
          </div>

          <div className="form-group">
            <label htmlFor="name" className="font-weight-bold">
              Nombre*
            </label>
            <Field
              type="text"
              className="form-control"
              id="name"
              name="name"
              placeholder="Pepito de Jesús"
            />
            {errors.name && touched.name ? (
              <small className="form-text text-danger">{errors.name}</small>
            ) : null}
          </div>

          <div className="form-group">
            <label htmlFor="email" className="font-weight-bold">
              Correo*
            </label>
            <Field
              type="email"
              className="form-control"
              id="email"
              name="email"
              placeholder="Pepitodejesus@gmail.com"
            />
            {errors.email && touched.email ? (
              <small className="form-text text-danger">{errors.email}</small>
            ) : null}
          </div>

          <div className="d-flex justify-content-center">
            <button type="submit" className="btn-send" disabled={isSubmitting}>
              Enviar
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
};
