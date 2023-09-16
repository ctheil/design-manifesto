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

const Article = ({ content, title, author }: ArticleProps) => {
  const divRef = useRef(null);
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    if (window.innerWidth < 900) {
      return;
    }
    const element = divRef.current;
    if (!element) {
      return;
    }
    gsap.fromTo(
      (element as Element).querySelector(".card__img"),
      {
        y: "0%",
      },
      {
        y: "150%",
        scrollTrigger: {
          trigger: (element as Element).querySelector(".content__box"),
          start: "top top",
          end: "bottom center",
          scrub: true,
          //markers: true,
          toggleActions: "restart pause resume pause",
        },
      },
    );
  }, []);

  return (
    <div ref={divRef} className="article__container">
      <TitleCard img={card} alt="titlecard-1" />
      <ArticleContent title={title} author={author} content={content} />
    </div>
  );
};

export default Article;
