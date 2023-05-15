import { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';

const useResponsive = () => {
  const [mounted, setMounted] = useState<boolean>(false);

  const isDesktop = useMediaQuery({ minWidth: 1024 });
  const isLaptopOrTablet = useMediaQuery({ minWidth: 768 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1023 });
  const isMobile = useMediaQuery({ maxWidth: 768 });

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    mounted && {
      isDesktop,
      isLaptopOrTablet,
      isTablet,
      isMobile,
    } as any
  );
};

export default useResponsive;
