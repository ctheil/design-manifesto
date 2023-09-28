import { useState } from "react";
import Articles from "./assets/articles.json";
import NavItem from "./components/NavItem";
const Nav = () => {
  const [hover, setHover] = useState(false);

  const handleMouseOver = () => {
    setHover(true);
  };
  const handleMouseLeave = () => {
    setHover(false);
  };
  return (
    <>
      <div className="nav__background"></div>
      <nav className="nav">
        <a className="nav__logo--link" href="#intro">
          <p className="nav__logo">DDFTM</p>
        </a>
        <ul className="nav__list">
          {Articles.map((a, idx) => {
            return <NavItem idx={idx} a={a} />;
          })}
        </ul>
      </nav>
    </>
  );
};

export default Nav;
