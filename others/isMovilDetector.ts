/* eslint-disable react-hooks/rules-of-hooks */
import { useState, useEffect } from 'react';

function isMovilDetector() : boolean {
  if (typeof window !== 'undefined') {
    const isWindow = typeof window === 'object';
    const getSize= ()=>{
      const width = isWindow ? window.innerWidth : 768;
      if (width >= 768) {
        return false;
      }
      return true;
    }
    const [windowSize, setWindowSize] = useState(getSize);
  
    useEffect(() => {
      handleWindow();
    }, []);
  
    const handleWindow= ()=> {
      if (!isWindow) return false;
  
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }
  
    const handleResize= ()=>{
      setWindowSize(getSize());
    }
  
    return windowSize;
  }

  return false  
}

export default isMovilDetector;
