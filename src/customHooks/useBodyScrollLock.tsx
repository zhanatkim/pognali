import {useState, useEffect} from "react";
import useDeviceDetect from "./useDeviceDetect";


// Хук для блокировки скролла body при открытии попапа на тачах
const useBodyScrollLock = () => {

  const {isMobile, isTablet} = useDeviceDetect();

  const bodyStyle = document.body.style;

  const [isLocked, setIsLocked] = useState(bodyStyle.overflowY === 'hidden');

  useEffect(() => {
    if (isMobile || isTablet) {
      bodyStyle.overflowY = isLocked ? 'hidden' : 'auto';
    }
  }, [bodyStyle, isLocked, isMobile, isTablet]);

  const toggleScroll = () => setIsLocked(!isLocked);

  return {isLocked, toggleScroll}

};

export default useBodyScrollLock;
