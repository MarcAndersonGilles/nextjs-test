import { useState } from 'react';

const useHorizontalScroll = () => {
  const [isMouseOnNav, setIsMouseOnNav] = useState(false);

  const handleHorizontalScroll = (e: React.MouseEvent<HTMLUListElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsMouseOnNav(true);
    const container = e.currentTarget;
    const containerScrollPosition = container.scrollLeft;
    let startX = e.clientX;
    let cumulativeX = 0;

    const mouseMove = (e: MouseEvent) => {
      const deltaX = e.clientX - startX;
      container.scrollLeft = containerScrollPosition - deltaX + cumulativeX;
      cumulativeX -= deltaX;
      startX = e.clientX;
    };

    const mouseUp = () => {
        setIsMouseOnNav(false);
      document.removeEventListener("mousemove", mouseMove);
      document.removeEventListener("mouseup", mouseUp);
    };

    document.addEventListener("mousemove", mouseMove);
    document.addEventListener("mouseup", mouseUp);
  };

  return { isMouseOnNav, handleHorizontalScroll };
};

export default useHorizontalScroll;
