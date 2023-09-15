import "../App.css";
import "./Article.module.css";
import ArticleContent from "./ArticleContent";
import TitleCard from "./TitleCard";
import card from "../assets/titlecard-1.png";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { Author } from "./Author";

type ArticleProps = {
  key: number;
  content: string[];
  title: string;
  author: Author;
};

const Article = ({ key, content, title, author }: ArticleProps) => {
  const divRef = useRef(null);
  gsap.registerPlugin(ScrollTrigger);

  /*
   * Need to set this up so that whenever the
   * current pos is in 'from top to bottom || from bottom to top'
   * to fix, else to relative and set position where left off,
   * so that on reenter know where it is.
   * */
  useEffect(() => {
    const element = divRef.current;
    if (!element) {
      return;
    }
    gsap.fromTo(
      element.querySelector(".card__img"),
      {
        y: "0%",
      },
      {
        //ease: Elastic.easeInOut,
        y: "150%",
        scrollTrigger: {
          trigger: element.querySelector(".content__box"),
          start: "top top",
          end: "bottom center",

          scrub: true,
          //markers: true,
          toggleActions: "restart pause resume pause",
          onUpdate: (self) => {
            // const progress = self.progress;
            // console.log(progress);
          },
        },
      },
    );
  }, []);

  return (
    <div style={{ zIndex: key }} ref={divRef} className="article__container">
      <TitleCard img={card} alt="titlecard-1" />
      <ArticleContent title={title} author={author} content={content} />
    </div>
  );
};

export default Article;
