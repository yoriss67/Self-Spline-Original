import React, { useEffect, useRef } from 'react';
import { Application } from '@splinetool/runtime';
import './Spline.css';

function Spline() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const app = new Application(canvas);
    app.load('https://prod.spline.design/2Z1xfL0ICTXXmkfj/scene.splinecode');
  }, []);

  return (
    <div className='spline'>
      <canvas ref={canvasRef} />
      <h5 className='spline_text'>Yayyy🥳</h5>
     
    </div>
  );
}

export default Spline;