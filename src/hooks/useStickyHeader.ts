import { useState, useEffect, useRef } from 'react';

let count = 0;
let scrollEventCount = 0;
let rendersSaved = 0;

const useStickyHeader = () => {
  const [isNavShowing, setIsNavShowing] = useState<boolean>(false);

  const prevScrollPos = useRef(typeof window !== 'undefined' && window?.pageYOffset);
  const ref = useRef<any>(null);

  useEffect(() => {
    count++;
    const handleScroll = () => {
      scrollEventCount++;
      if (ref.current !== null) {
        rendersSaved++;
        return;
      }
      const currentScrollPos: any = window?.pageYOffset;
      const isScrolledDown = prevScrollPos.current > currentScrollPos;

      if (isNavShowing && isScrolledDown) {
        setIsNavShowing(false);
      } else if (!isNavShowing && !isScrolledDown) {
        ref.current = setTimeout(() => {
          setIsNavShowing(true);
          ref.current = null;
        }, 300);
      } else {
        rendersSaved++;
      }
      prevScrollPos.current = currentScrollPos;
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isNavShowing]);

  return {
    count,
    scrollEventCount,
    rendersSaved,
    isNavShowing,
  };
};

export default useStickyHeader;
