import React from 'react';
import { useState, useEffect, useCallback, useRef } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import Sidebar from './Sidebar';
import { MdClose } from 'react-icons/md';

const App = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const openSidebar = () => setShowSidebar(true);
  const closeSidebar = () => setShowSidebar(false);

  return (
    <main>
      <GiHamburgerMenu className="open-btn" onClick={openSidebar} />
      <Sidebar showSidebar={showSidebar} closeSidebar={closeSidebar} />
      <button className="btn" onClick={() => setShowModal(true)}>
        Show modal
      </button>
      <div className={`modal-container ${showModal && 'modal-active'}`}>
        <h1> Modal stuff</h1>
        <MdClose className="closeModal" onClick={() => setShowModal(false)} />
      </div>
    </main>
  );
};

export default App;
