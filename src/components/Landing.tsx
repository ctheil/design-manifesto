import "../App.css";
const Landing = () => {
  return (
    <section className="landing">
      <div className="landing__upper">
        <div className="landing__poll"></div>
        <h1 id="intro">Don't Design for the Monoculture</h1>
      </div>
      <div className="landing__lower">
        <div className="landing__p">
          <p className="content__p">
            This manifesto addresses the often overlooked question in web
            design: Are we designing for our audience or simply following
            trends? It calls upon web designers to{" "}
            <span className="landing__p--h2">break free from conformity</span>
            <br />, rediscover their unique voices, and create user-centric
            digital experiences that resonate deeply with brands' audiences.
            This manifesto seeks to redefine web design as a transformative
            force that transcends trends and leaves a lasting impact on the
            digital landscape.
          </p>
        </div>
        <div className="landing__p">
          <h2>Break Free from Conformity</h2>
        </div>
        <div className="landing__cards"></div>
      </div>
    </section>
  );
};

export default Landing;
