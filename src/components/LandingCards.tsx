import Articles from "../assets/articles.json";
const LandingCards = () => {
  return (
    <div className="landing__cards">
      {Articles.map((a, idx) => {
        return (
          <div key={idx} className="landing__card">
            <a href={`#a${idx}`}>
              <div className="landing__card--img-box">
                <img src={a.titleCardSM} alt={a.title} />
              </div>
              <figcaption>{a.title}</figcaption>
            </a>
          </div>
        );
      })}
    </div>
  );
};

export default LandingCards;
