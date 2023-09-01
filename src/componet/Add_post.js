import { React, useState } from "react";
import twiter from "../images/twiter.png";
import linkedin from "../images/linkedin.png";
import facebook from "../images/facebook.png";
import insta from "../images/instagram.png";
import PulseLoader from "react-spinners/PulseLoader";

const Add_post = ({ Add_Social_Icon }) => {

  const [twitterLoading, setTwitterLoading] = useState(false);
  const [linkedinLoading, setLinkedinLoading] = useState(false);
  const [facebookLoading, setFacebookLoading] = useState(false);
  const [instaLoading, setInstaLoading] = useState(false);


  const handleSocialIconClick = (icon) => {
    switch (icon) {
      case "twitter":
        setTwitterLoading(true);
        break;
      case "linkedin":
        setLinkedinLoading(true);
        break;
      case "facebook":
        setFacebookLoading(true);
        break;
      case "insta":
        setInstaLoading(true);
        break;
      default:
        break;
    }
  
    Add_Social_Icon(icon);

    setTimeout(() => {
      switch (icon) {
        case "twitter":
          setTwitterLoading(false);
          break;
        case "linkedin":
          setLinkedinLoading(false);
          break;
        case "facebook":
          setFacebookLoading(false);
          break;
        case "insta":
          setInstaLoading(false);
          break;
        default:
          break;
      }
    }, 2000);
  };


  return (
    <div className="add-post text-center">
      <div className="add-post-on pt-2"> Add post on </div>
      <div className="pt-3">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M12 11V8L16 12L12 16V13H8V11H12ZM12 2C17.52 2 22 6.48 22 12C22 17.52 17.52 22 12 22C6.48 22 2 17.52 2 12C2 6.48 6.48 2 12 2ZM12 20C16.42 20 20 16.42 20 12C20 7.58 16.42 4 12 4C7.58 4 4 7.58 4 12C4 16.42 7.58 20 12 20Z" fill="#D03B99" />
        </svg>
      </div>
      <div className="twiter p-2">
        {twitterLoading ? (
          <div>
            <PulseLoader
             style={{position:"relative",top:"1rem",display:"flex",}}
              color="gray"
              cssOverride={{}}
              loading
              size={10}
              speedMultiplier={1}
            />
          </div>
        ) : (
          <img
            src={twiter}
            width="40"
            height="40"
            onClick={() => handleSocialIconClick("twitter")}
            style={{ cursor: "pointer" }}
          />
        )}
      </div>
      <div className="linkedin p-2">
        {linkedinLoading ? (
          <div>
            <PulseLoader
             style={{position:"relative",top:"1rem",display:"flex",}}
              color="gray"
              cssOverride={{}}
              loading
              size={10}
              speedMultiplier={1}
            />
          </div>) : (
          <img
            src={linkedin}
            width="40"
            height="40"
            onClick={() => handleSocialIconClick("linkedin")}
            style={{ cursor: "pointer" }}
          />
        )}
      </div>
      <div className="facebook p-2">
        {facebookLoading ? (
          <div>
            <PulseLoader
             style={{position:"relative",top:"1rem",display:"flex",}}
              color="gray"
              cssOverride={{}}
              loading
              size={10}
              speedMultiplier={1}
            />
          </div>) : (
          <img
            src={facebook}
            width="40"
            height="40"
            onClick={() => handleSocialIconClick("facebook")}
            style={{ cursor: "pointer" }}
          />
        )}
      </div>
      <div className="insta p-2">
        {instaLoading ? (
          <div>
            <PulseLoader
             style={{position:"relative",top:"1rem",display:"flex",}}
              color="gray"
              cssOverride={{}}
              loading
              size={10}
              speedMultiplier={1}
            />
          </div>) : (
          <img
            src={insta}
            width="40"
            height="40"
            onClick={() => handleSocialIconClick("insta")}
            style={{ cursor: "pointer" }}
          />
        )}
      </div>
    </div>
  );
};

export default Add_post;
