import { useEffect, useState } from "react";
import "../App.css";
import { IArticle } from "./article.types";

type JumpProps = {
  articles: IArticle[];
  currArticle: string | null;
};
const Jump = ({ articles, currArticle }: JumpProps) => {
  const [next, setNext] = useState<null | string>(null);

  useEffect(() => {
    if (!currArticle) {
      return setNext(null);
    }
    const currIdx = articles.findIndex((a) => a.classParent === currArticle);
    if (currIdx + 1 >= articles.length) {
      return setNext(null);
    }

    setNext(`a${currIdx + 1}`);
  }, [currArticle, articles]);

  if (next === null) {
    return;
  } else {
    return (
      <div className="jump__container">
        <a href={`#${next}`}>Jump to next article</a>
      </div>
    );
  }
};

export default Jump;
