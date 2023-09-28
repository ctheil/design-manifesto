import "./App.css";
import Nav from "./Nav";
import Article from "./components/Article";
import Articles from "./assets/articles.json";
import { IArticle } from "./components/article.types";
import { useState } from "react";
import Jump from "./components/Jump";
import Landing from "./components/Landing";

function App() {
  const [currArticle, setCurrArticle] = useState<null | string>(null);

  const handleSetCurrArticle = (_currArticle: string | null) => {
    setCurrArticle(_currArticle);
  };

  return (
    <section className="main">
      <Nav articles={Articles as IArticle[]} />
      <Landing />
      {/*
        JUMP ELEMENT W/ currArticle
      */}
      {Articles.map((a, i) => {
        return (
          <Article
            handleSetCurrArticle={handleSetCurrArticle}
            key={i}
            article={a as IArticle}
          />
        );
      })}
      <Jump currArticle={currArticle} articles={Articles as IArticle[]} />
    </section>
  );
}

export default App;
