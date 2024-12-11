import { useEffect, useState } from 'react';
import globeImage from '../assets/globe.png'


const RotatingGlobe = () => {
    const [rotation, setRotation] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setRotation(prev => (prev+1) % 360);
        }, 50);

        return () => clearInterval(interval);
    }, [])

  return (
    <img 
        src={globeImage} 
        alt="Globe" 
        className='transition-transform duration-1000'
        style={{
            transform: `rotate(${rotation}deg)`,
            width: '300px',
            height: '300px'
        }}
    />
  )
}

export default RotatingGlobe;