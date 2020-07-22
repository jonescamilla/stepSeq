import React from 'react';
import VisualContainer from './VisualContainer';
import Header from '../components/Header';
import Footer from '../components/Footer';
import sampleData from '../../../sampleData.json';

const MainContainer = () => {
  return (
    <div className="MainContainer">
      <Header users={sampleData.users} />
      <VisualContainer sampleData={sampleData}/>
      <Footer />
    </div>
  );
}

export default MainContainer;