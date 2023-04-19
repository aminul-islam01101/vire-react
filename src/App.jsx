/* eslint-disable react/jsx-no-target-blank */

import { useState } from 'react';
import Login from './components/Login';
import Modal from './components/Modal';
import SignUp from './components/Signup';
import DataServices from './components/dataServices/DataServices';
import PriceCardSection from './components/priceCards/PriceCardSection';
import ServiceArea from './components/ServiceArea';

function App() {
  const [dataServiceOpen, setDataServiceOpen] = useState(false);
  const handleDataServices = () => {
    setDataServiceOpen(!dataServiceOpen);
  };
 
  return (
    <div className="my-layout">
      <Login />
      <SignUp />
      <DataServices dataServiceOpen={dataServiceOpen} handleDataServices={handleDataServices} />
      <PriceCardSection />
      <ServiceArea/>

    
     
    </div>
  );
}

export default App;
