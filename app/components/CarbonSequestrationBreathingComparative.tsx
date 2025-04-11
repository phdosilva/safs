"use client";

import dynamic from 'next/dynamic';
import { useState, useEffect } from 'react';

// Dynamically import Lottie with no SSR
const Lottie = dynamic(() => import('lottie-react'), { ssr: false });

const CarbonSequestrationBreathingComparative = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return <div className="w-full h-full bg-black" />;
  }

  return (
    <Lottie 
      animationData={require('./carbonSequestrationBreathingComparativeLottieData.json')} 
      loop={true}
    />
  );
};

export default CarbonSequestrationBreathingComparative;
