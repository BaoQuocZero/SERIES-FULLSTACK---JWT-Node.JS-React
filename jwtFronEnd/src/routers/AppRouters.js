import {
    Switch,
    Route
} from "react-router-dom";

import Login from '../components/Login/Login.js';
import Register from '../components/Register/Register.js';
import Users from '../components/manageUsers/Users.js';
import PrivateRouter from "./PrivateRouter.js";

const Projects = () => {
    return (
        <div>
            Projects
        </div>
    )
}

const AppRouters = (props) => {
    return (
        <>
            <Switch>
                <PrivateRouter path='/users' component={Users} />
                <PrivateRouter path='/projects' component={Projects} />

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
        </>
    )
}

export default AppRouters