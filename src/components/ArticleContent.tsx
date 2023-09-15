import "../App.css";
import Author from "./Author";
type ContentProps = {
  content: string[];
  title: string;
  author: {
    name: string;
    img: string;
    est: string;
    url: string;
  };
};

const ArticleContent = ({ content, title, author }: ContentProps) => {
  console.log(content, title, author);
  /*
   * Author should be cutsom component that links back to portfolio
   * */
  return (
    <div className="content__box">
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
