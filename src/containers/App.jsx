import React from "react";
import { Layout } from "../components/Layout";
import { Header } from "../components/Header";
import "../assets/styles/App.scss";
import { Content } from "../components/Content";
import { useGetDepartments } from "../hooks/useGetDepartments";

export const App = () => {
  const { departments, data } = useGetDepartments();
  return (
    <Layout>
      <Header />
      {departments.length > 0 && (
        <Content departments={departments} data={data} />
      )}
    </Layout>
  );
};
