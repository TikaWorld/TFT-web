import * as React from 'react';
import './App.css';
import {Field} from './battle/field.js'

function App() {
  const canvasRef = React.useRef(null);
  const [context, setContext] = React.useState(null);

  React.useEffect(() => {
    if (canvasRef.current) {
      const renderCtx = canvasRef.current.getContext('2d');

      if (renderCtx) {
        setContext(renderCtx);
      }
    }
    // Draw a rectangle
    if (context) {
    }
  }, [context]);

  return (
    <div
      style={{
        textAlign: 'center',
      }}>
      <Field/>
      <canvas
        id="canvas"
        ref={canvasRef}
        width={500}
        height={500}
        style={{
          border: '2px solid #000',
          marginTop: 10,
        }}
      ><Field/></canvas>
    </div>
  );
}
export default App;
