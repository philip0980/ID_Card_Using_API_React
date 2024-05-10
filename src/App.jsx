import React, { useState } from "react";
import axios from "axios";
import "./App.css";

const App = () => {
  const [datas, setDatas] = useState();
  console.log(datas[0]);
  const handleGet = async () => {
    const response = await axios.get("https://randomuser.me/api/");
    setDatas(response.data.results);
    console.log(response.data.results);
  };
  return (
    <>
      <h1>ID Card</h1>
      <div className="container">
        <img src={datas[0].picture.large} alt="" />
        <div className="description">
          <h3>
            {`Name : ${datas[0].name.title} ${datas[0].name.first} ${datas[0].name.last} `}
          </h3>
          <h3>{`Email : ${datas[0].email}`}</h3>
          <h3>{`City : ${datas[0].location.city}`}</h3>
          <h3>{`Age : ${datas[0].dob.age}`}</h3>
          <h3>{`Phone : ${datas[0].cell}`}</h3>
        </div>
      </div>
      <button onClick={() => handleGet()}>Get</button>
    </>
  );
};

export default App;
