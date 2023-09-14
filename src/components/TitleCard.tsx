import "../App.css";
type CardProps = {
  img: string;
  alt: string;
  state: boolean;
};
const TitleCard = (props: CardProps) => {
  return (
    <div className={`card__box ${props.state ? "relative" : "fixed"}`}>
      <img className="card__img" src={props.img} alt={props.alt} />
    </div>
  );
};

export default TitleCard;
