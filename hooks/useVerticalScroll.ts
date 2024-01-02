import { useState } from 'react';

const useVerticalScroll = () => {
  const [isMouseOnNav, setIsMouseOnNav] = useState(false);

  const handleVerticalScroll = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsMouseOnNav(true);
    const container = e.currentTarget;
    const containerScrollPosition = container.scrollTop;
    let startY = e.clientY;
    let cumulativeY = 0;

    const mouseMove = (e: MouseEvent) => {
      const deltaY = e.clientY - startY;
      container.scrollTop = containerScrollPosition + deltaY - cumulativeY;
      cumulativeY += deltaY;
      startY = e.clientY;
    };

    const mouseUp = () => {
      setIsMouseOnNav(false);
      document.removeEventListener("mousemove", mouseMove);
      document.removeEventListener("mouseup", mouseUp);
    };

    document.addEventListener("mousemove", mouseMove);
    document.addEventListener("mouseup", mouseUp);
  };

  return { isMouseOnNav, handleVerticalScroll };
};

export default useVerticalScroll;
