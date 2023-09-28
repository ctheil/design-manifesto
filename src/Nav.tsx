import NavItem from "./components/NavItem";
import { IArticle } from "./components/article.types";
type NavProps = {
  articles: IArticle[];
};
const Nav = ({ articles }: NavProps) => {
  return (
    <>
      <div className="nav__background"></div>
      <nav className="nav">
        <a className="nav__logo--link" href="#intro">
          <p className="nav__logo">DDFTM</p>
        </a>
        <ul className="nav__list">
          {articles.map((a, idx) => (
            <NavItem key={idx} idx={idx} a={a} />
          ))}
        </ul>
      </nav>
    </>
  );
};

export default Nav;
