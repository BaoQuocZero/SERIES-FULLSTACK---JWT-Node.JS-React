import './components/App.scss';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { BrowserRouter as Router } from "react-router-dom";

import Nav from './components/Navigation/Nav.js';

import AppRouters from './routers/AppRouters.js';

import { useEffect, useState } from 'react';

function App() {
  const [account, setAccount] = useState({})

  useEffect(() => {
    let session = sessionStorage.getItem("account");
    if (session) {
      setAccount(JSON.parse(session))
    }
  }, [])
  return (
    <>
      <Router>
        <div className='app-header'>
          <Nav />
        </div>
        <div className='app-container'>
          <AppRouters />
        </div>
      </Router>

      <ToastContainer
        position="bottom-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
}

export default App;
