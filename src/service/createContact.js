const BASE_URL = "https://sigma-backend.georgerangelcode.vercel.app/api";

export const callApi = async (endpoint, options = {}) => {
  options.headers = {
    "Content-Type": "application/json",
    Accept: "application/json",
  };
  const url = BASE_URL + endpoint;
  const response = await fetch(url, options);
  const data = await response.json();

  return data;
};

const api = {
  contacts: {
    create(contact) {
      return callApi(`/contacts`, {
        method: "POST",
        body: JSON.stringify(contact),
      });
    },
  },
};

export default api;
