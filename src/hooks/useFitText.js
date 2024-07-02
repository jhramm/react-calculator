import { useState, useEffect, useRef } from "react";

export default function useFitText(maxFontSize = 70) {
  const ref = useRef();
  const [fontSize, setFontSize] = useState(maxFontSize);

  useEffect(() => {
    const handleResize = () => {
      if (ref.current) {
        const { offsetWidth } = ref.current;
        const newSize = Math.min(maxFontSize, offsetWidth / 10);
        setFontSize(newSize);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [maxFontSize]);

  return { ref, fontSize };
};


