import React from 'react';
import { Focus } from './components/Focus';
import { Render } from './components/Render';
import { StopWatch } from './components/StopWatch';

function App() {
  return (
    <>
      <fieldset>
        <legend>This is a Render Component and updating age with +5</legend>
        <Render />
      </fieldset>
      <fieldset>
        <legend>
          This is a Focus Component and using useRef to focus the field
        </legend>
        <Focus />
      </fieldset>
      <fieldset>
        <legend>This is a Stop Watch Component and using useRef</legend>
        <StopWatch />
      </fieldset>
    </>
  );
}

export default App;
