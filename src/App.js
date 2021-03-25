import * as React from 'react';
import './App.css';

import {Field} from './component/field.js'
import Timeline from './component/timeline.js'

function App() {
  const canvasRef = React.useRef(null);
  const [context, setContext] = React.useState(null);

  return (
    <div>
      <Field/>
      <Timeline/>
    </div>
  );
}
export default App;
