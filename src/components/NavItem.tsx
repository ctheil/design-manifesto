import "../App.css";
import { IArticle } from "./article.types";

type Props = {
  idx: number;
  a: IArticle;
};

const NavItem = (props: Props) => {
  return (
    <div className="nav__box">
      <li className="nav__item">
        <a className="nav__link" href={`#${props.a.anchor}`}>{`${
          props.idx + 1
        }`}</a>
      </li>
    </div>
  );
};

export default NavItem;
