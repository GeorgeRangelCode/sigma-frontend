import * as Yup from "yup";

export const ContactSchema = Yup.object().shape({
  state: Yup.string().required("El campo departamento es requerido"),
  city: Yup.string().required("El campo ciudad es requerido"),
  name: Yup.string()
    .min(2, "El campo nombre debe tener minimo 2 caracteres")
    .max(50, "El campo nombre debe tener maximo 50 caracteres")
    .required("El campo nombre es requerido"),
  email: Yup.string()
    .email("Correo invalido")
    .required("El campo correo es requerido"),
});
