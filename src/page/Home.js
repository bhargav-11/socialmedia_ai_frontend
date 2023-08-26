import React from "react";
import Form from "../componet/Form";
import ai from "../images/Ai.png";

const Home = () => {
  return (
    <>
      <div className="home">
        <div className="container">
          <div className="row">
            <div className="home-title">
              post generator
              <span className="ms-2">
                <img src={ai} width="30" height="30"/>
              </span>
            </div>
            <Form />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
