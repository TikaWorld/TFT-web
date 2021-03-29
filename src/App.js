import * as React from 'react';
import './App.css';
import styled from 'styled-components'

import Field from 'component/field'
import Timeline from 'component/timeline'
import Palette from 'component/palette'

const Cont = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: relative;
`
const BackgroundCont = styled.div`
  width: 100%;
  height: 100%;
  background-color: #222222;
`

function App() {
  return (
    <Cont>
    <BackgroundCont>
      <Field/>
      <Timeline/>
      <Palette/>
    </BackgroundCont>
    </Cont>
  );
}
export default App;
