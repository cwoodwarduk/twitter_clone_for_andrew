import React, { useState } from 'react';
import './App.css';
import Sidebar from './components/Sidebar/Sidebar';
import Feed from './components/Feed/Feed';
import Widgets from './components/Widgets/Widgets';
import Footer from './components/Footer/Footer';
import firebase from 'firebase';

function App() {

  const [isAuth, setIsAuth] = useState(false);
  const [userData, setUserData] = useState({});
  
  firebase.auth().onAuthStateChanged(firebaseUser => {
    if (firebaseUser){
      setIsAuth(true);
    } else {
      setIsAuth(false);
    }
  });

  return (
    <div>
      <div className="app__body">
        <Sidebar />

        <Feed isAuth={isAuth} setData={setUserData} />

        <Widgets isAuth={isAuth} />
      </div>
      
      {
        !isAuth &&
        <div className="app__footer">
          <Footer />
        </div>
      }
      
    </div>
    
  );
}

export default App;
