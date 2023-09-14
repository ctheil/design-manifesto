import "../App.css";
type ContentProps = {
  children: string;
};

const ArticleContent = ({ children }: ContentProps) => {
  return (
    <div className="content__box">
      <p className="content__p">{children}</p>
    </div>
  );
};

export default ArticleContent;
