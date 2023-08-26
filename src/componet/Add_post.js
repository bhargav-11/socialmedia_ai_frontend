import React from "react";
import twiter from "../images/twiter.png";
import linkedin from "../images/linkedin.png";
import facebook from "../images/facebook.png";
import insta from "../images/instagram.png";

const Add_post = () => {
  return (
    <div className="add-post text-center">
      <div className="add-post-on pt-2"> Add post on </div>
      <div className="pt-3">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M12 11V8L16 12L12 16V13H8V11H12ZM12 2C17.52 2 22 6.48 22 12C22 17.52 17.52 22 12 22C6.48 22 2 17.52 2 12C2 6.48 6.48 2 12 2ZM12 20C16.42 20 20 16.42 20 12C20 7.58 16.42 4 12 4C7.58 4 4 7.58 4 12C4 16.42 7.58 20 12 20Z"
            fill="#D03B99"
          />
        </svg>
      </div>
      <div className="twiter p-2">
        <img src={twiter} width="40" height="40" />
      </div>
      <div className="linkedin p-2">
        <img src={linkedin} width="40" height="40" />
      </div>
      <div className="facebook p-2">
        <img src={facebook} width="40" height="40" />
      </div>
      <div className="insta p-2">
        <img src={insta} width="40" height="40" />
      </div>
    </div>
  );
};

export default Add_post;
