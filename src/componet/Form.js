import React, { useState } from "react";
import { RiFileCopyLine } from "react-icons/ri";
import Add_post from "./Add_post";
import axios from "axios";
import Swal from "sweetalert2";
import PulseLoader from "react-spinners/PulseLoader";

function Form() {
  const [regenerateButtonLoading, setRegenerateButtonLoading] = useState(false);
  const [startButtonLoading, setStartButtonLoading] = useState(false);
  const [PostData, setPostdata] = useState({
    command: "",
    goal: "encourage engagement",
    tone: "😊 Friendly",
    audience: "Parents",
  });
  const [errors, setErrors] = useState({
    command: '',
  });
  const [postResponse, setPostResponse] = useState("");
  const apiUrl = process.env.REACT_APP_SOCILA_API;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setPostdata({
      ...PostData,
      [name]: value,
    });
    setErrors({ ...errors, [name]: '' });
  };
  const handlenewresponse = (event)=>{
    setPostResponse(event.target.value);
  }
  const handleValidation = () => {
    let valid = true;
    const newErrors = { ...errors };
    if (!PostData.command.trim()) {
      newErrors.command = '*Command is required';
      valid = false;
    }
    setErrors(newErrors);
    return valid;
  };

  const handlepostgenrater = (action) => {
    if (handleValidation()) {
      if (action === "regenerate") {
        setRegenerateButtonLoading(true);
      } else if (action === "start") {
        setStartButtonLoading(true);
      }

      axios
        .post(apiUrl + "/generate-post", PostData, {
          headers: { "Content-Type": "application/json" },
        })
        .then((response) => {
          setPostResponse(response.data.generated_post);
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {
          setRegenerateButtonLoading(false);
          setStartButtonLoading(false);
        });
    }
  };

  const charCount = postResponse.length;
  const copyToclipboard = () => {
    navigator.clipboard.writeText(JSON.stringify(postResponse));
    Swal.fire({
      title: "Data copied to clipboard",
      icon: "success",
      toast: true,
      timer: 2000,
      position: "top-right",
      timerProgressBar: true,
      showConfirmButton: false,
    });
  };

  function PostSocialicon(platform) {
    const data = {
      post_message: postResponse,
      post_url: "",
      platform: platform,
    };
    try {
      axios
        .post(apiUrl + "/post", data, {
          headers: {
            "Content-Type": "application/json",
          },
        })
        .then((response) => {
          Swal.fire({
            title: response.data.message,
            icon: "success",
            toast: true,
            timer: 2000,
            position: "top-right",
            timerProgressBar: true,
            showConfirmButton: false,
          });
        })
        .catch((error) => {
          Swal.fire({
            title: error,
            icon: "error",
            toast: true,
            timer: 2000,
            position: "top-right",
            timerProgressBar: true,
            showConfirmButton: false,
          });
        });
    } catch (error) {
      console.error("An error occurred:", error);
    }
  }
  return (
    <div className="post-form">
      <div className="container ">
        <div className="row justify-content-center">
          <div className="form-title mb-3 mt-4">command to bot</div>
          <div className="input-form">
            <input
              type="text"
              className="form-control post-control"
              name="command"
              value={PostData.command}
              onChange={handleChange}
              onBlur={handleValidation}
              placeholder="write a post about LinkedIn success for PR agencies"
              required
            />            
            <span className="error-message ">{errors.command}</span>
            <div className="row">
              <label
                for="inputPassword"
                className="col-sm-1 col-form-label post-lable mt-1"
              >
                goal
              </label>
              <div
                class="col-sm-11"
                style={{
                  width: "93.2%",
                  marginLeft: "4.8rem",
                  marginTop: "-2.6rem",
                }}
              >
                <select
                  className="form-select post-control"
                  aria-label="Default select example"
                  name="goal"
                  value={PostData.goal}
                  onChange={handleChange}
                >
                  <option selected value="encourage engagement">
                    Encourage Engagement{" "}
                  </option>
                  <option value="Generate Brand Awareness">
                    Generate Brand Awareness
                  </option>
                  <option value="Promote Products/Services">
                    Promote Products/Services
                  </option>
                  <option value="Share Personal Stories">
                    Share Personal Stories
                  </option>
                </select>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="row">
                  <label
                    for="inputPassword"
                    className="col-sm-1 col-form-label post-lable ms-2 mt-1"
                  >
                    tone
                  </label>
                  <div class="col-sm-10" style={{ marginLeft: "30px" }}>
                    <select
                      className="form-select post-control"
                      aria-label="Default select example"
                      name="tone"
                      value={PostData.tone}
                      onChange={handleChange}
                    >
                      <option selected value="Friendly">
                        😊 Friendly
                      </option>
                      <option value="Professional"> 💼 Professional</option>
                      <option value="Inspirational">🧑‍🎓Inspirational</option>
                      <option value="Humorous">😄 Humorous</option>
                      <option value="Educational">📖 Educational</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="row">
                  <label
                    for="inputPassword"
                    className="col-sm-1 col-form-label post-lable mt-1"
                  >
                    audience
                  </label>
                  <div class="col-sm-10" style={{ marginLeft: "54px" }}>
                    <select
                      className="form-select post-control"
                      aria-label="Default select example"
                      name="audience"
                      value={PostData.audience}
                      onChange={handleChange}
                    >
                      <option selected value="Parents">
                        Parents
                      </option>
                      <option value="Tech Enthusiasts">Tech Enthusiasts</option>
                      <option value="Travel Enthusiasts">
                        Travel Enthusiasts
                      </option>
                      <option value="Entrepreneurs/Small Business Owners">
                        Entrepreneurs/Small Business Owners
                      </option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="output-value">
            <div className="post-output">
              <div className="message-content ">
                <textarea className="w-100" name="response" value={postResponse} onChange={handlenewresponse} rows={6}>

                  {/* {paragraphs.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))} */}
                </textarea>
              </div>
            </div>
            <div className="row justify-content-between post-icons pb-2">
              <div className="col-4 value-char">{charCount} Characters</div>
              <div className="col-4 post">
                <div className="copy">
                  <RiFileCopyLine onClick={copyToclipboard} />
                </div>
                <div>
                  <button
                    className="regenerate"
                    onClick={() => handlepostgenrater("regenerate")}
                    disabled={!postResponse || regenerateButtonLoading}
                  >
                    {regenerateButtonLoading ? (
                      <div className="regenerateloader">
                        <PulseLoader
                          color="#000"
                          cssOverride={{}}
                          loading
                          margin={4}
                          size={15}
                          speedMultiplier={1}
                        />
                      </div>
                    ) : (
                      "Regenerate"
                    )}
                  </button>
                </div>

                <button
                  className="post-start"
                  onClick={() => handlepostgenrater("start")}
                  disabled={startButtonLoading || regenerateButtonLoading}
                >
                  {startButtonLoading ? (
                    <div className=" startloader">
                      <PulseLoader
                      style={{position:"relative",bottom:"0.3rem",display:"flex",left:"2.8rem"}}
                        color="#fff"
                        cssOverride={{}}
                        loading
                        // margin={4}
                        size={15}
                        speedMultiplier={1}
                      />
                    </div>
                  ) : (
                    "Start"
                  )}
                </button>
              </div>
            </div>
          </div>
          <Add_post Add_Social_Icon={PostSocialicon} />
        </div>
      </div>
    </div>
  );
}

export default Form;
