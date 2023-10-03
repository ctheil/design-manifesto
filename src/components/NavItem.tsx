import "../App.css";
import { IArticle } from "./article.types";

type Props = {
  idx: number;
  a: IArticle;
};

const NavItem = (props: Props) => {
  return (
    <li className="nav__box">
      <a className="nav__link" href={`#${props.a.anchor}`}>{`${
        props.idx + 1
      }`}</a>
    </li>
  );
};

export default NavItem;
