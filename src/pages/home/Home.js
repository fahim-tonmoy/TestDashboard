import Header from "../../components/Header";
import React from "react";
import Sidebar from "../../components/Sidebar";
import Table from "../../components/Table";
import Title from "../../components/Title";

const Home = () => {
  return (
    <div className="">
      <Header />
      <Title />
      <Table />
      <Sidebar />
    </div>
  );
};

export default Home;
