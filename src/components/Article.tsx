import "../App.css";
import "./Article.module.css";
import ArticleContent from "./ArticleContent";
import TitleCard from "./TitleCard";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { IArticle } from "./article.types";

type ArticleProps = {
  handleSetCurrArticle: (arg0: string | null) => void;
  article: IArticle;
};

const Article = ({ article, handleSetCurrArticle }: ArticleProps) => {
  const divRef = useRef(null);
  const [imageLoaded, setImageLoaded] = useState(false);
  gsap.registerPlugin(ScrollTrigger);

  const handleImageLoad = () => {
    setImageLoaded(true);
    ScrollTrigger.refresh();
  };

  useEffect(() => {
    if (window.innerWidth < 900) {
      return;
    }
    const element = divRef.current;

    if (!element) {
      return;
    }

    const contentBoxHeight = (element as Element).querySelector<HTMLElement>(
      ".content__box",
    )!.offsetHeight;
    const imageHeight = (element as Element).querySelector<HTMLElement>(
      ".card__img",
    )!.offsetHeight;

    const yVal = contentBoxHeight - imageHeight;

    gsap.fromTo(
      (element as Element).querySelector(".card__img"),
      {
        y: "0%",
      },
      {
        y: `${yVal}px`,
        onStart: () => {
          handleSetCurrArticle(article.classParent);
        },
        onComplete: () => {
          handleSetCurrArticle(null);
        },
        scrollTrigger: {
          trigger: (element as Element).querySelector<HTMLElement>(
            ".content__box",
          ),
          start: "top top",
          end: "bottom center",
          scrub: true,
          // markers: true,
          toggleActions: "restart pause resume pause",
        },
      },
    );
  }, [imageLoaded, article.classParent, handleSetCurrArticle]);

  return (
    <div
      id={article.anchor}
      ref={divRef}
      className={`article__container ${article.classParent}`}
    >
      <TitleCard
        img={article.titleCard}
        config={article.titleCardProps}
        alt={`${article.author.name}-title-card`}
        handleImageLoad={handleImageLoad}
      />
      <ArticleContent
        title={article.title}
        author={article.author}
        content={article.content}
      />
    </div>
  );
};

export default Article;
