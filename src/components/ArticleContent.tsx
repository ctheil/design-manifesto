import "../App.css";
import "../styles/gerardo.css";
import "../styles/beth.css";
import "../styles/mel.css";
import Author from "./Author";
import { AuthorType } from "./article.types";
type ContentProps = {
  content: string[];
  title: string;
  author: AuthorType;
};

const ArticleContent = ({ content, title, author }: ContentProps) => {
  return (
    <div className={`content__box`}>
      <>
        <h2 className="content__title">{title}</h2>
        <Author author={author} />
        <>
          {content.map((p, i) => (
            <p
              dangerouslySetInnerHTML={{ __html: p }}
              className="content__p"
              key={i}
            ></p>
          ))}
        </>
      </>
    </div>
  );
};

export default ArticleContent;
