import { useEffect, useState } from "react";
import { API } from "../constants";

export const useGetDepartments = () => {
  const [departments, setDepartments] = useState([]);
  const [data, setData] = useState([]);

  useEffect(() => {
    window
      .fetch(API)
      .then((response) => response.json())
      .then((data) => {
        setDepartments(Object.keys(data));
        setData(data);
      });
  }, []);
  return { departments, data };
};
