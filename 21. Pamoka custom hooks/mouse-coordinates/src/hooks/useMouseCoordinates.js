import { useState, useEffect } from "react";

export default function useMouseCoordinates() {
  const [coordinates, setCoordinates] = useState({ x: 0, y: 0 });

  useEffect(() => {
    function handleMouseMove(e) {
      setCoordinates({ x: e.clientX, y: e.clientY });
    }

    window.addEventListener("mousemove", handleMouseMove);
  }, []);

  return coordinates;
}
