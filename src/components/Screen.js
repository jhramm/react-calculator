import React from "react";
import useFitText from "../hooks/useFitText";
import "./Screen.css";

export default function Screen({ value }) {
  const { ref, fontSize } = useFitText(70);
  return (
    <div ref={ref} className="screen" style={{ fontSize: `${fontSize}px` }}>
      {value}
    </div>
  );
}
