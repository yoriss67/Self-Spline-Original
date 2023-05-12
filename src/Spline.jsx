// 👩🏼‍🎓
import React, { useEffect, useRef } from 'react';
import { Application } from '@splinetool/runtime';
import './Spline.css';
import styled from 'styled-components';

export default  function Spline() {
  // const canvasRef = useRef(null);

  // useEffect(() => {
  //   const canvas = canvasRef.current;
  //   const app = new Application(canvas);
  //   app.load('https://prod.spline.design/2Z1xfL0ICTXXmkfj/scene.splinecode');
  // }, []);

  return (
    <Wrapper>
      <Spline className="spline" scene="https://prod.spline.design/2Z1xfL0ICTXXmkfj/scene.splinecode" />
      <Content></Content>     
    </Wrapper>
  );
}


const Wrapper = styled.div`
font-family: 'Spline Sans', sans-serif;
  width: 70%;
  margin: 0 auto;
  position: relative;
`;

const Content = styled.div`
  width: 100%;
  height: 100%;
`;

const SplineText = styled.h5`
  font-size: 2em;
  text-align: center;
  color: #333;
  position: absolute;
  top: 0%;
  left: 0%;
`;



//Bard 画面幅によってzoomを変えてみたかったけど、うまくいかなかった
// import React, { useRef, useEffect } from 'react';
// import { Application } from '@splinetool/runtime';
// import './Spline.css';

// function Spline() {
//   const canvasRef = useRef(null);

//   useEffect(() => {
//     const canvas = canvasRef.current;
//     const app = new Application(canvas);
//     app.load('https://prod.spline.design/2Z1xfL0ICTXXmkfj/scene.splinecode');

//     // Get the width of the viewport
//     const viewportWidth = window.innerWidth;

//     // Use an if statement to check if the viewport width is less than or equal to 680px
//     if (viewportWidth <= 680) {
//       // Set the zoom value to 25%
//       app.setZoom(2);
//     } else {
//       // Set the zoom value to 40%
//       app.setZoom(90);
//     }
//   }, []);

//   return (
//     <div className='spline'>
//       <canvas ref={canvasRef} />
//       <h5 className='spline_text'>Yayyy🥳</h5>
//     </div>
//   );
// }

// export default Spline;





// //Bard
// import React, { useEffect, useRef } from 'react';
// import { Application } from '@splinetool/runtime';
// import './Spline.css';
// import styled from 'styled-components';

// const Wrapper = styled.div`
//   width: 70%;
//   margin: 0 auto;
//   position: relative;
// `;

// const Canvas = styled.canvas`
//   width: 100%;
//   height: 100%;
// `;

// const SplineText = styled.h5`
//   font-size: 2em;
//   text-align: center;
//   color: #333;
//   position: absolute;
//   top: 0%;
//   left: 0%;
// `;

// function Spline() {
//   const canvasRef = useRef(null);

//   useEffect(() => {
//     const canvas = canvasRef.current;
//     const app = new Application(canvas);
//     app.load('https://prod.spline.design/2Z1xfL0ICTXXmkfj/scene.splinecode');
//   }, []);

//   return (
//     <Wrapper>
//       <Canvas ref={canvasRef} />
//       <SplineText>Yayyy🥳</SplineText>
//     </Wrapper>
//   );
// }

// export default Spline;
