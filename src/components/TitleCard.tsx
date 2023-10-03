import { useState, useEffect } from "react";
import "../App.css";
import "../Modal.css";

type Props = {
  img: string;
  alt: string;
  config: string;
  handleImageLoad: () => void;
};
const TitleCard = (props: Props) => {
  const [touched, setTouched] = useState(false);
  const [cords, setCords] = useState([50, 50]);
  const [open, setOpen] = useState(true);

  useEffect(() => {
    if (!open) {
      setTimeout(() => {
        setOpen(true);
      }, 5000);
    }
  }, [open]);
  const generateRandCords = (): { x: number; y: number } => {
    const getRandArbitrary = () => {
      return Math.random() * (100 - 0) + 0;
    };
    const x = getRandArbitrary();
    const y = getRandArbitrary();
    return { x: x, y: y };
  };
  const handleMouseOver = () => {
    setTouched(true);
    const rand = generateRandCords();
    setCords([rand.x, rand.y]);
  };
  const handleClose = () => {
    setOpen(false);
    setTouched(false);
  };
  return (
    <div className={`card__box relative`}>
      <div className="card__img">
        <img
          onLoad={props.handleImageLoad}
          className="card__img"
          src={props.img}
          alt={props.alt}
        />
        {props.config === "unique" && open && (
          <>
            <div
              style={open && { opacity: 1 }}
              className="modal__background"
            ></div>
            <div
              style={{
                top: touched ? `${cords[0]}%` : "",
                left: touched ? `${cords[1]}%` : "",
                transform: touched
                  ? `translate("${cords[0]}%", "${cords[1]}%")`
                  : "",
                opacity: open ? 1 : 0,
              }}
              onMouseOver={handleMouseOver}
              className="modal"
            >
              <div className="modal__heading">
                <p className="modal__heading--h3">
                  UX as a Playground of Challenges
                </p>
              </div>
              <div className="modal__content">
                <p className="modal__p">
                  Designers, stop streamlining and start disrupting.
                </p>
              </div>
              <div className="modal__actions">
                <button onClick={handleClose} className="modal__sub-action">
                  Cancel
                </button>
                <button onClick={handleClose} className="modal__main-action">
                  OK
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default TitleCard;
