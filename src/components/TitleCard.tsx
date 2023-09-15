import "../App.css";
type CardProps = {
  img: string;
  alt: string;
};
const TitleCard = (props: CardProps) => {
  return (
    <div className={`card__box relative`}>
      <img className="card__img" src={props.img} alt={props.alt} />
    </div>
  );
};

export default TitleCard;
