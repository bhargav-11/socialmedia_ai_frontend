import {React,useEffect,useRef,messageList} from "react";
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
              <div class="col-sm-11" style={{ width: "93.2%", marginLeft: "4.8rem", marginTop: "-2.6rem" }}>
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
                  <div class="col-sm-10" style={{ marginLeft: "30px" }}>
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
                  >
                    audience
                  </label>
                  <div class="col-sm-10" style={{ marginLeft: "54px" }}>
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
  <div className="message-content">

    🎉Roll out the red carpet and get your confetti ready, because we have something extraordinary to share! 😍 We are thrilled to announce the launch of our BRAND NEW PRODUCT that is set to redefine your everyday life, right here, right now! 🚀✨\n\nYes, that’s right! We've been working restlessly, burning midnight oil, refining every detail, aiming for perfection. And the moment of revelation has finally arrived! Phew! What a thrilling ride it has been, and we are beyond excited to lift the curtain and showcase our latest creation to you. We just can't wait to have you experience the magic it can unfold! 🎁✨\n\nCurious about what it could be? We promise it's something you've never seen before but something you've always wished for! A product that's not just a product, but a revolution, a movement, a figure of change! Intriguing, isn't it? Well, that's all we aim for – to keep you on the edge of your seat, totally excited to learn more! 💥🔥\n\nYou must be thinking, what's so special about this new product? Let's drop some hints - it’s cutting-edge, it’s innovative, and it’s designed with YOU in mind. We're talking high-tech, user-friendly interface that'll sweep you off your feet! This thing is the game-changer you never knew you needed. But hey, ✋ don't take our word for it - get ready to experience it for yourself, and we bet you'll love it just as much as we do! 🌟❤️‍🔥\n\nBrace yourself, as the countdown has officially begun! Just a little more patience, and soon you'll discover what the hype is all about! So prepare to share the excitement with us, to step into a brand-new era where everyday life is transformed into something extraordinary. Are you ready?\n\nStay tuned for the BIG reveal. Make sure to follow our page closely, or you might miss the most electrifying event of the year! The suspense is real, the energy is high, and the anticipation is absolutely through the roof! Let’s embrace this momentous occasion together, shall we?1️⃣...2️⃣...3️⃣...BLAST OFF!! 🚀🎉\n\nOh, by the way, did we mention there'll be some insanely cool surprises waiting for you? 😉 Well, now you know - the fun just kicked up a notch! So, let’s set the universe on fire with our collective energy and will to change the game in the world we live in! Get ready, folks, because something BIG is coming your way! 💥\nSee you at the Grand Launch. Let the countdown begin! ⏳🎉🚀\n\n#NewProductLaunch #ExcitingTimesAhead #CountdownBegins #StayTuned #GameChanger #PrepareToBeAmazed"
  </div>
  </div>

  <div className="row justify-content-between post-icons">
    <div class="col-4 value-char">48 words/239 characters</div>
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
