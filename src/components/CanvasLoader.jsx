import React from "react";
import { Html, useProgress } from "@react-three/drei";

const CanvasLoader = () => {
  const { progress } = useProgress();
  return (
    <Html center>
      <span className="canvas-loader"></span>
      <p style={{ color: "#fff" }}>{progress.toFixed(2)}%</p>
    </Html>
  );
};

export default CanvasLoader;
