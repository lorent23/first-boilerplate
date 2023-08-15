import React, { useEffect, useRef } from 'react';
import '@lottiefiles/lottie-player';
import { create } from '@lottiefiles/lottie-interactivity';

const RobotLottieAnimation = () => {
  const myRef = useRef(null);

  useEffect(() => {
    const loadListener = () => {
      create({
        mode: 'cursor',
        player: '#eightthLottie',
        actions: [
          {
            visibility: [0, 1],
            type: 'seek',
            position: { x: [0, 1], y: [0, 1] },
            frames: [0, 81],
          },
        ],
      });

      // Disable scrolling on the body element
      document.body.style.overflow = 'hidden';
    };

    const animationFinishedListener = () => {
      // Enable scrolling on the body element when the animation finishes
      document.body.style.overflow = 'auto';
    };

    const currentRef = myRef.current;

    if (typeof window !== 'undefined' && currentRef) {
      currentRef.addEventListener('load', loadListener);
      currentRef.addEventListener('animationcomplete', animationFinishedListener);
    }

    return () => {
      if (typeof window !== 'undefined' && currentRef) {
        currentRef.removeEventListener('load', loadListener);
        currentRef.removeEventListener('animationcomplete', animationFinishedListener);
      }
      
      // Reset overflow on both body and html elements when the component unmounts
      document.body.style.overflow = 'auto';
      document.documentElement.style.overflow = 'auto';
    };
  }, []);

  return (
    <div className="MyLottieAnimation cursor-pointer">
      {typeof window !== 'undefined' && (
        <lottie-player
          ref={myRef}
          id="eightthLottie"
          mode="normal"
          src="https://assets3.lottiefiles.com/packages/lf20_ofa3xwo7.json"
          style={{ width: '500px', height: '500px' }}
        ></lottie-player>
      )}
    </div>
  );
};

export default RobotLottieAnimation;
