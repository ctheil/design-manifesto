import Articles from "./assets/articles.json";
const Nav = () => {
  return (
    <>
      <div className="nav__background"></div>
      <nav className="nav">
        <a className="nav__logo--link" href="#intro">
          <p className="nav__logo">DDFTM</p>
        </a>
        <ul className="nav__list">
          {Articles.map((a, idx) => (
            <li key={idx} className="nav__item">
              <a className="nav__link" href={`#${a.anchor}`}>{`A${idx}`}</a>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default Nav;
