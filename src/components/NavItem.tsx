import { useState } from "react";
import "../App.css";

type Props = {
  idx: number;
  a: { anchor: string; icon: string };
};

const NavItem = (props: Props) => {
  const [hover, setHover] = useState(false);
  const handleMouseOver = () => {
    setHover(true);
  };
  const handleMouseLeave = () => {
    setHover(false);
  };

  if (hover) {
    return (
      <>
        <div
          className="nav__box"
          onMouseOver={handleMouseOver}
          onMouseLeave={handleMouseLeave}
        >
          <div className="nav__icon">
            <a href={`#${props.a.anchor}`}>
              <img
                alt={`Article ${props.idx + 1} icon`}
                className="nav__icon--img"
                src={props.a.icon}
              />
            </a>
          </div>
        </div>
      </>
    );
  } else {
    return (
      <div
        className="nav__box"
        onMouseOver={handleMouseOver}
        onMouseLeave={handleMouseLeave}
      >
        <li
          onMouseOver={handleMouseOver}
          onMouseLeave={handleMouseLeave}
          key={props.idx}
          className="nav__item"
        >
          <a className="nav__link" href={`#${props.a.anchor}`}>{`A${
            props.idx + 1
          }`}</a>
        </li>
      </div>
    );
  }
};

export default NavItem;
