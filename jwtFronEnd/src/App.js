import './components/App.scss';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Nav from './components/Navigation/Nav.js';
import Login from './components/Login/Login.js';
import Register from './components/Register/Register.js';
import Users from './components/manageUsers/Users.js';
import { useEffect, useState } from 'react';
import _ from 'lodash'

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
        <div className='app-container'>

          {account && !_.isEmpty(account) && account.isAuthenticated
            && <Nav />
          }

          <Switch>
            <Route path="/news">
              News
            </Route>
            <Route path="/about">
              About
            </Route>
            <Route path="/contact">
              Contact
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
            <Route path="/users">
              <Users />
            </Route>


            <Route path="/" exact>
              Home
            </Route>
            <Route path="*">
              404 not found
            </Route>
          </Switch>
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
