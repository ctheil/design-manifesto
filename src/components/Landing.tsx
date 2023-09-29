import { useState } from "react";
import "../App.css";
import Poll from "./Poll";
import LandingCards from "./LandingCards";
const Landing = () => {
  const [incorrect, setIncorrect] = useState(false);

  const handleIncorrect = () => {
    setIncorrect(true);
  };
  const handleCorrect = () => {
    setIncorrect(false);
  };
  return (
    <section className="landing">
      <div className="landing__upper">
        <div className="landing__poll">
          <Poll
            handleIncorrect={handleIncorrect}
            handleCorrect={handleCorrect}
          />
        </div>
        <div className="landing__heading">
          <hr id="intro" className="intro__line" />
          {incorrect && <h2>Stop Lying!</h2>}
          <h1>Don't Design for the Monoculture</h1>
        </div>
      </div>
      <div className="landing__lower">
        <div className="landing__p">
          <p className="content__p">
            This manifesto addresses the often overlooked question in web
            design: Are we designing for our audience or simply following
            trends? It calls upon web designers to
            <br />
            <span className="landing__p--h2">break free from conformity</span>
            <br />
            rediscover their unique voices, and create user-centric digital
            experiences that resonate deeply with brands' audiences. This
            manifesto seeks to redefine web design as a transformative force
            that transcends trends and leaves a lasting impact on the digital
            landscape.
          </p>
        </div>
        <LandingCards />
      </div>
    </section>
  );
};

export default Landing;
