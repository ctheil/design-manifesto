import "./App.css";
import Nav from "./Nav";
import Article from "./components/Article";
import Articles from "./assets/articles.json";
import { Author } from "./components/Author";
import { IArticle } from "./components/article.types";

function App() {
  return (
    <section className="main">
      <Nav articles={Articles as IArticle[]} />
      {Articles.map((a, i) => {
        return (
          <Article
            key={i}
            title={a.title}
            titleCard={a.titleCard}
            titleCardProps={a.titleCardProps as "unique" | "normal"}
            author={a.author as Author}
            content={a.content}
            classParent={a.classParent}
            anchor={a.anchor}
          />
        );
      })}
    </section>
  );
}

export default App;
