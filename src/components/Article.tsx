import "../App.css";
import "./Article.module.css";
import ArticleContent from "./ArticleContent";
import TitleCard from "./TitleCard";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { Author } from "./Author";

type ArticleProps = {
  key: number;
  content: string[];
  title: string;
  author: Author;
  titleCard: string;
  titleCardProps: "unique" | "normal";
  classParent: string;
};

const Article = ({
  key,
  content,
  title,
  author,
  titleCard,
  titleCardProps,
  classParent,
}: ArticleProps) => {
  const divRef = useRef(null);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [yValue, setYValue] = useState(0);
  gsap.registerPlugin(ScrollTrigger);

  const handleImageLoad = () => {
    console.log("image loaded");
    setImageLoaded(true);
    // const element = divRef.current;
    // const contentBoxHeight = (element as Element).querySelector<HTMLElement>(
    //   ".content__box",
    // ).offsetHeight;
    // const imageHeight = (element as Element).querySelector<HTMLElement>(
    //   ".card__img",
    // ).offsetHeight;
    //
    // const yVal = contentBoxHeight - imageHeight;
    // setYValue(yVal);
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
    ).offsetHeight;
    const imageHeight = (element as Element).querySelector<HTMLElement>(
      ".card__img",
    ).offsetHeight;

    const yVal = contentBoxHeight - imageHeight;
    // setYValue(yVal);

    console.log(`${author.name}: `, yVal);

    gsap.fromTo(
      (element as Element).querySelector(".card__img"),
      {
        y: "0%",
      },
      {
        y: `${yVal}px`,
        scrollTrigger: {
          trigger: (element as Element).querySelector<HTMLElement>(
            ".content__box",
          ),
          start: "top top",
          end: "bottom center",
          scrub: true,
          //
          // markers: true,
          toggleActions: "restart pause resume pause",
        },
      },
    );
  }, [imageLoaded, yValue]);

  return (
    <div ref={divRef} className={`article__container ${classParent}`}>
      <TitleCard
        img={titleCard}
        config={titleCardProps}
        alt={`${author.name}-title-card`}
        handleImageLoad={handleImageLoad}
      />
      <ArticleContent title={title} author={author} content={content} />
    </div>
  );
};

export default Article;
