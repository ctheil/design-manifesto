import { useEffect, useState } from "react";

const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const handleSize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      console.log("before", windowSize);
      setWindowSize({
        width: width,
        height: height,
      });
    };

    window.addEventListener("resize", handleSize);

    return () => {
      window.removeEventListener("resize", handleSize);
    };
  }, [windowSize]);

  return windowSize;
};

export default useWindowSize;
