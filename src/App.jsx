/* eslint-disable react/jsx-no-target-blank */

import { useState } from 'react';
import Banner from './components/Banner/Banner';
import Footer from './components/Footer/Footer';
import NavBar from './components/Navbar/NavBar';
import './components/Navbar/NavBar.css';

// import ServiceArea from './components/ServiceArea/ServiceArea';
import BusinessSection from './components/Business/BusinessSection';
import DataDiscovery from './components/DataDiscovery/DataDiscovery';
import ServiceArea from './components/ServiceArea/ServiceArea';
import PriceCardSection from './components/priceCards/PriceCardSection';
import ProductSection from './components/product/ProductSection';
import MarketingSection from './components/Marketing/MarketingSection';

function App() {
  const [dataServiceOpen, setDataServiceOpen] = useState(false);
  const [productViewOpen, setProductViewOpen] = useState(false);
  const [businessViewOpen, setBusinessViewOpen] = useState(false);
  const [marketingViewOpen, setMarketingViewOpen] = useState(false)
  const handleDataServices = () => {
    setDataServiceOpen(true);
    setProductViewOpen(false);
    setBusinessViewOpen(false);
    setMarketingViewOpen(false)
  };
  const handleProductView = () => {
    setProductViewOpen(true);
    setDataServiceOpen(false);
    setBusinessViewOpen(false);
    setMarketingViewOpen(false)
  };
  const handleBusinessView = () => {
    setProductViewOpen(false);
    setDataServiceOpen(false);
    setBusinessViewOpen(true);
    setMarketingViewOpen(false)
  };
  const handleMarketingView = () => {
    setProductViewOpen(false);
    setDataServiceOpen(false);
    setBusinessViewOpen(false);
    setMarketingViewOpen(true)
  };

  return (
    <div className="">
      <NavBar />
      <Banner />
      <div className="my-layout">
        <DataDiscovery dataServiceOpen={dataServiceOpen} handleDataServices={handleDataServices} />

        <ServiceArea />
        <ProductSection productViewOpen={productViewOpen} handleProductView={handleProductView} />
        <BusinessSection businessViewOpen={businessViewOpen} handleBusinessView={handleBusinessView} />
        <MarketingSection
          marketingViewOpen={marketingViewOpen}
          handleMarketingView={handleMarketingView}
        />
      </div>
      {/* <Login />
      
 
      <SignUp /> */}

      {/* <ServiceArea/> */}
      <PriceCardSection />
      <Footer />
    </div>
  );
}

export default App;
