/**
 * useScrollPosition - A custom React hook to track the scroll position of the window.
 *
 * This hook listens to the window's scroll event and returns the current
 * and previous scroll positions (both X and Y axes).
 *
 * @returns {Object} An object containing:
 *  - x: current horizontal scroll position (window.scrollX)
 *  - y: current vertical scroll position (window.scrollY)
 *  - lastX: previous horizontal scroll position
 *  - lastY: previous vertical scroll position
 *
 * @example
 * const { x, y, lastX, lastY } = useScrollPosition();
 *
 * console.log("Current X:", x, "Current Y:", y);
 * console.log("Previous X:", lastX, "Previous Y:", lastY);
 */

import { useState, useEffect } from "react";

const useScrollPosition = () => {
  const [data, setData] = useState({
    x: 0,
    y: 0,
    lastX: 0,
    lastY: 0,
  });

  const handleScroll = () => {
    setData((last) => {
      return {
        x: window.scrollX,
        y: window.scrollY,
        lastX: last.x,
        lastY: last.y,
      };
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return data;
};

export default useScrollPosition;
