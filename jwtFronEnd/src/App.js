import './components/App.scss';

import Nav from './components/Navigation/Nav.js';
import Login from './components/Login/Login.js';
import Register from './components/Register/Register.js';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <div className='app-container'>
          {/* <Nav /> */}
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
        position="top-right"
        autoClose={5000}
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
