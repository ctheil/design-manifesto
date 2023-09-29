import Articles from "../assets/articles.json";
const LandingCards = () => {
  return (
    <div className="landing__cards">
      {Articles.map((a, idx) => {
        return (
          <div className="landing__card">
            <img src={a.titleCardSM} alt={a.title} />
            <figcaption>{a.title}</figcaption>
          </div>
        );
      })}
    </div>
  );
};

export default LandingCards;
