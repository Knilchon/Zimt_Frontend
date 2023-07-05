import React from 'react';
import MapSvg from '../components/MapSvg';

const handlePathClick = (id: string) => {
  console.log('Clicked path ID:', id);
};

const App = () => (
  <>
    <h1>SVG page</h1>
    <MapSvg handlePathClick={handlePathClick} />
  </>
);

export default App;