/* eslint-disable react/jsx-no-target-blank */

import { useState } from 'react';
import Login from './components/Login';
import DataServices from './components/dataServices/DataServices';

function App() {
  const [dataServiceOpen, setDataServiceOpen] = useState(false);
  const handleDataServices = () => {
    setDataServiceOpen(!dataServiceOpen);
  };
  return (
    <div className="">
      <Login />
      <DataServices dataServiceOpen={dataServiceOpen} handleDataServices={handleDataServices} />
    </div>
  );
}

export default App;
