import api from "../service/createContact";
import Swal from "sweetalert2";

export const useRegistration = () => {
  const onSubmit = async (values, actions) => {
    try {
      await api.contacts.create(values);
      Swal.fire({
        title: "Registro exitoso",
        text: "Tu información ha sido recibida satisfactoriamente.",
      });
      actions.resetForm();
    } catch (error) {
      console.log("RegistrationForm -> error", error);
    }
  };

  return { onSubmit };
};
