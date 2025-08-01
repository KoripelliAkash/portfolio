import { useState, useEffect } from 'react';
import Spline from '@splinetool/react-spline';

export default function SplineBackground() {
  const [error, setError] = useState(null);
  const [splineApp, setSplineApp] = useState(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (splineApp) {
        // Update camera or object position based on mouse movement
        const obj = splineApp.findObjectByName('Scene');
        if (obj) {
          const x = (e.clientX / window.innerWidth - 0.5) * 2;
          const y = (e.clientY / window.innerHeight - 0.5) * 2;
          
          // Smoothly rotate or move the scene based on mouse position
          obj.rotation.x = y * 0.1;
          obj.rotation.y = x * 0.1;
        }
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [splineApp]);

  const onLoad = (spline) => {
    setSplineApp(spline);
    // Start any animations that are set up in Spline
    const obj = spline.findObjectByName('Scene');
    if (obj) {
      // Trigger initial animation
      spline.emitEvent('mouseDown', obj);
    }
  };

  return (
    <div className="spline-background">
      {error ? (
        <div className="spline-error">
          Couldn't load 3D background: {error.message}
        </div>
      ) : (
        <Spline 
          scene="https://prod.spline.design/70e20soGch5xc6lc/scene.splinecode"
          onLoad={onLoad}
          onError={(error) => {
            console.error('Spline error:', error);
            setError(error);
          }}
        />
      )}
    </div>
  );
}