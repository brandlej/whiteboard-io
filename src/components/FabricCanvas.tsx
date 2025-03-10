import { useEffect, useRef } from "react";
import * as fabric from "fabric";

interface FabricCanvasProps {}

export const FabricCanvas = ({}: FabricCanvasProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const fabricCanvasRef = useRef<fabric.Canvas>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    const opts = {};
    fabricCanvasRef.current = new fabric.Canvas(canvasRef.current, opts);

    // Sample rectangle
    const rect = new fabric.Rect({
      left: 10,
      top: 10,
      fill: "red",
      width: 50,
      height: 100,
    });
    fabricCanvasRef.current.add(rect);

    fabricCanvasRef.current.setDimensions({
      width: window.innerWidth,
      height: window.innerHeight,
    });

    return () => {
      fabricCanvasRef?.current?.dispose();
    };
  }, []);

  return <canvas ref={canvasRef} />;
};
