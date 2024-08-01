import './App.scss';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { BrowserRouter as Router } from "react-router-dom";
import Nav from './components/Navigation/Nav.js';
import AppRouters from './routers/AppRouters.js';
import { useEffect, useState, useContext } from 'react';
import { UserContext } from "./context/UserContext";
import { Rings } from 'react-loader-spinner'

function App() {
  const { user } = useContext(UserContext);

  return (
    <>
      <Router>
        {user && user.isLoading ?
          <div className='loading-container'>
            <Rings
              visible={true}
              height="80"
              width="80"
              color="#1877f2"
              ariaLabel="rings-loading"
              wrapperStyle={{}}
              wrapperClass=""
            />
            <div>Loading data...</div>
          </div>

          :
          <>
            <div className='app-header'>
              <Nav />
            </div>
            <div className='app-container'>
              <AppRouters />
            </div>
          </>
        }
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
