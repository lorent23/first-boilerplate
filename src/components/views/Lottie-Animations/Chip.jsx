import React, { useEffect, useRef } from 'react';
import '@lottiefiles/lottie-player';
import { create } from '@lottiefiles/lottie-interactivity';

const ChipLottieAnimation = () => {
  const myRef = useRef(null); // 1. create a reference for the lottie player

  useEffect(() => {
    const loadListener = () => {
      // 4. configure the interactivity library
      create({
        mode: 'scroll',
        player: '#firstLottie',
        actions: [
          {
            visibility: [0, 0.3],
            type: 'stop',
            frames: [0],
          },
          {
            visibility: [0.3, 1],
            type: 'seek',
            frames: [0, 68],
          },
        ],
      });
    };

    const currentRef = myRef.current; // Create a variable with the current ref value

    if (typeof window !== 'undefined' && currentRef) {
      // 3. listen for player load. see lottie player repo for other events
      currentRef.addEventListener('load', loadListener);
    }

    return () => {
      if (typeof window !== 'undefined' && currentRef) {
        currentRef.removeEventListener('load', loadListener);
      }
    };
  }, []);

  return (
    <div className="MLottieAnimation cursor-pointer">
      {typeof window !== 'undefined' && (
        <lottie-player
          ref={myRef}
          id="firstLottie"
          mode="normal"
          src="https://assets4.lottiefiles.com/private_files/lf30_mbX0GF.json"
          background="transparent"
          style={{ width: '500px', height: '500px', color: 'white' }}
        ></lottie-player>
      )}
    </div>
  );
};

export default ChipLottieAnimation;
