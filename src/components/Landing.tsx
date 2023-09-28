import "../App.css";
const Landing = () => {
  return (
    <section className="landing">
      <div className="landing__upper">
        <div className="landing__poll"></div>
        <h1>Don't Design for the Monoculture</h1>
      </div>
      <div className="landing__lower">
        <div className="landing__p">
          <p className="content__p">
            In the ever-evolving realm of web design, a crucial question has
            been persistently overlooked: Are we designing for our audience, or
            are we simply creating clones of prevailing trends and templates?
            The digital landscape, with its relentless pursuit of the 'next big
            thing,' has inadvertently trapped many web designers in the monotony
            of conformity. This manifesto aims to illuminate the path less
            traveled, urging web designers to abandon the shackles of the
            monoculture and aesthetic trends, and instead, embark on a journey
            to design for the brand's audience—a journey that promises
            authenticity, engagement, and a true connection with users.
          </p>
          <p className="content__p">
            In this manifesto, we aim to break free from the constraints of
            conformity, encouraging web designers to embrace their unique
            voices, challenge the status quo, and craft digital experiences that
            resonate deeply with the brand's audience. It is a call to arms to
            rediscover the essence of design, moving beyond the ephemeral allure
            of trends, and into the realm of timeless, user-centric creativity.
            Together, we shall redefine web design as a force that transcends
            the ordinary and leaves a lasting impact on the digital landscape.
          </p>
        </div>
        <div className="landing__cards"></div>
      </div>
    </section>
  );
};

export default Landing;
