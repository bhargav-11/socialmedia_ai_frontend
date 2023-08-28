import React from "react";
import Form from "../componet/Form";
import ai from "../images/Ai.png";

const Home = () => {
  return (
    <>
      <div className="home">
        <div className="container" >
          <div className="row">
            <div className="home-title" >
              post generator
              <span className="logo">
                <h1 className="logo-letter">AI</h1>
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
