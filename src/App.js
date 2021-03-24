import * as React from 'react';
import './App.css';

import {Field} from './component/field.js'
import Champion from './container/champion.js'

function App() {
  const canvasRef = React.useRef(null);
  const [context, setContext] = React.useState(null);

  return (
    <div>
      <Field/>
    </div>
  );
}
export default App;
