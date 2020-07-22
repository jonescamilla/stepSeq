import React from 'react';
import VisualContainer from './VisualContainer';
import HeaderContainer from './HeaderContainer';
import Footer from '../components/Footer';
import sampleData from '../../../sampleData.json';

const MainContainer = () => {
  const { instruments, status, users, localState, scales } = sampleData;
  return (
    <div className="MainContainer">
      <HeaderContainer users={users}/>
      <VisualContainer />
      <Footer />
    </div>
  )
}

export default MainContainer;