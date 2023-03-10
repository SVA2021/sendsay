import React from 'react';
import {Calculator} from './components';
import {DndProvider} from 'react-dnd';
import {HTML5Backend} from 'react-dnd-html5-backend';

function App(): JSX.Element {
  return (
    <div className="App">
      <DndProvider backend={HTML5Backend}>
        <Calculator />
      </DndProvider>
    </div>
  );
}

export default App;