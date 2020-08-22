import React from 'react';
import './App.css';
import Sidebar from './components/Sidebar/Sidebar';
import Feed from './components/Feed/Feed';
import Widgets from './components/Widgets/Widgets';
import LoginModal from './components/LoginModal/LoginModal';
import useLoginModal from './components/LoginModal/useLoginModal';

function App() {

  const {isShowing, toggle} = useLoginModal();

  return (
    <div className="appBody">

      <Sidebar />

      <Feed />

      <Widgets props={toggle} />

      <LoginModal isShowing={isShowing} hide={toggle} />

    </div>
  );
}

export default App;
