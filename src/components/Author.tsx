import "../App.css";
import { AiFillLinkedin } from "react-icons/ai";
import { BiLinkExternal } from "react-icons/bi";
/*
 * Is it possible to pull this stuff from Linkedin? Get most recent profile img, current position or company???
 */
interface Link {
  type: "linkedin" | "external";
  url: string;
}
export interface Author {
  name: string;
  img: string;
  est: string;
  position: string;
  links: Link[];
  url?: string;
}

type AuthorProps = {
  author: Author;
};
const Author = ({ author }: AuthorProps) => {
  return (
    <div className="author__box">
      <div className="author__img-container">
        <img
          src={author.img}
          alt={`${author.name}'s profile image'`}
          className="author__img"
        />
      </div>
      <div className="author__content">
        <div className="author__name-box">
          {author.url ? (
            <a target="_blank" href={author.url} className="author__name--link">
              {author.name}
            </a>
          ) : (
            <p className="author__name">{author.name}</p>
          )}
          <p className="author__position">{author.position}</p>
        </div>
        <div className="socials">
          {author.links &&
            author.links.map((link, i) => {
              return (
                <a target="_blank" key={i} href={link.url}>
                  {link.type === "linkedin" && (
                    <AiFillLinkedin className="author__icon" />
                  )}
                  {link.type === "external" && (
                    <BiLinkExternal className="author__icon" />
                  )}
                </a>
              );
            })}
        </div>
        <div className="author__est">
          <p className="author__est">{author.est}</p>
        </div>
      </div>
    </div>
  );
};

export default Author;
