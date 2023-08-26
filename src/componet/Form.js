import React from "react";
import { RiFileCopyLine } from "react-icons/ri";
import Add_post from "./Add_post";

function Form() {
  return (
    <div className="post-form">
      <div className="container ">
        <div className="row justify-content-center">
          <div className="form-title mb-2">command to bot</div>
          <div className="input-form">
            <input
              type="text"
              className="form-control post-control"
              placeholder="write a post about LinkedIn success for PR agencies"
            />
            <div class="row">
              <label
                for="inputPassword"
                className="col-sm-1 col-form-label post-lable"
              >
                goal
              </label>
              <div class="col-sm-11">
                <select
                  class="form-select post-control"
                  aria-label="Default select example"
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
              <div class="col-md-6">
                <div class="row">
                  <label
                    for="inputPassword"
                    className="col-sm-1 col-form-label post-lable ms-2"
                  >
                    tone
                  </label>
                  <div class="col-sm-10" style={{marginLeft:"30px"}}>
                    <select
                      class="form-select post-control"
                      aria-label="Default select example"
                    >
                      <option selected value="Friendly">
                        Friendly
                      </option>
                      <option value="Professional">Professional</option>
                      <option value="Humorous">Humorous</option>
                      <option value="Inspirational">Inspirational</option>
                      <option value="Educational">Educational</option>
                    </select>
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="row" >
                  <label
                    for="inputPassword"
                    className="col-sm-1 col-form-label post-lable "
                    // style={{ marginRight: "40px" }}
                  >
                    audience
                  </label>
                  <div class="col-sm-10"  style={{marginLeft:"42px"}}>
                    <select
                      class="form-select post-control"
                      aria-label="Default select example"
                    >
                      <option selected value="Parents">
                        Parents
                      </option>
                      <option
                        value="Tech Enthusiasts"
                      >
                        Tech Enthusiasts
                      </option>
                      <option
                        value="Travel Enthusiasts"
                      >
                        Travel Enthusiasts
                      </option>
                      <option
                        value="Entrepreneurs/Small Business Owners"
                      >
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
              Note that this is a simplified outline of the conversion process.
              You will need to adapt and integrate the provided code snippets
              into the appropriate places in the MUI DataGrid structure.
              Additionally, you might need to adjust styling, event handling,
              and other features to match the behavior of the original table.
            </div>
            <div className="row justify-content-between post-icons">
              <div class="col-4 value-char">48 words/239 character </div>
              <div class="col-4 post">
                <div className="copy">
                  <RiFileCopyLine />
                </div>
                <div>
                  <button className="regenerate">regenerate</button>
                </div>
                <div>
                  <button className="post-start">start</button>
                </div>
              </div>
            </div>
          </div>
          <Add_post />
        </div>
      </div>
    </div>
  );
}

export default Form;
