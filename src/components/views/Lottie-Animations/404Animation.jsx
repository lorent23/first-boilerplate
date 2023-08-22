import React, { useEffect, useRef } from 'react';
import '@lottiefiles/lottie-player';
import { create } from '@lottiefiles/lottie-interactivity';

const FFFAnimation = () => {
  const lottieRef = useRef(null); // Create a reference for the lottie player

  useEffect(() => {
    const loadListener = () => {
      // Configure the interactivity library
      create({
        player: '#lottiePlayer', // Use your player's ID here
        mode: 'autoplay', // Set the mode to autoplay
      });
    };

    const currentRef = lottieRef.current; // Create a variable with the current ref value

    if (typeof window !== 'undefined' && currentRef) {
      // Listen for player load
      currentRef.addEventListener('load', loadListener);
    }

    return () => {
      if (typeof window !== 'undefined' && currentRef) {
        currentRef.removeEventListener('load', loadListener);
      }
    };
  }, []);

  return (
    <div className="flex items-center justify-center"> {/* Center both vertically and horizontally */}
      <div className="LottieAnimation cursor-pointer">
        {typeof window !== 'undefined' && (
          <lottie-player
            ref={lottieRef}
            id="lottiePlayer"
            mode="normal"
            src="https://lottie.host/71aab7d0-70ab-4f87-8f6f-245d45f89a4c/lUFDZ7avZ6.json"
            background="#FFFFFF"
            style={{ width: '300px', height: '300px' }}
            loop
            autoplay // Set autoplay to true
            direction="1"
          ></lottie-player>
        )}
      </div>
    </div>
  );
};

export default FFFAnimation;
