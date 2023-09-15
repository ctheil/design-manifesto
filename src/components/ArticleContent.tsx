import "../App.css";
type ContentProps = {
  content: string[];
  title: string;
  author: string;
};

const ArticleContent = ({ content, title, author }: ContentProps) => {
  console.log(content, title, author);
  /*
   * Author should be custom component that has profile picture or something
   * and links back to personal portfolio
   * */
  return (
    <div className="content__box">
      <>
        <h2 className="content__title">{title}</h2>
        <h3 className="content__author">{`by: ${author}`}</h3>
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
