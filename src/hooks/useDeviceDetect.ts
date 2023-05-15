import { useState, useEffect } from 'react';

const useDeviceDetect = () => {
  const [isMobile, setMobile] = useState<boolean>(false);
  const [device, setDevice] = useState<any>(null);

  useEffect(() => {
    const userAgent = typeof window.navigator === 'undefined' ? '' : navigator.userAgent;

    console.log(typeof userAgent);

    const mobile = Boolean(userAgent.match(/Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i));
    setMobile(mobile);
    setDevice(userAgent?.match(/Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i)?.['0']);
  }, []);

  return { isMobile, device };
};

export default useDeviceDetect;