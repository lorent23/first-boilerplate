import React, { useEffect, useRef } from 'react';
import '@lottiefiles/lottie-player';
import { create } from '@lottiefiles/lottie-interactivity';

import './Robot.css'; // Import your CSS file

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

      // Add a class to the body to prevent scrolling
      document.body.classList.add('no-scroll');
    };

    const animationFinishedListener = () => {
      // Remove the class to allow scrolling when the animation finishes
      document.body.classList.remove('no-scroll');
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

      // Remove the class on unmount to enable scrolling
      document.body.classList.remove('no-scroll');
    };
  }, []);

  return (
    <div className="MyLottieAnimation">
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
