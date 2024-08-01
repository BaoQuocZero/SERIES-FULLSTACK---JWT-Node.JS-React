import { useEffect, useContext } from "react";
import { useHistory, Redirect } from "react-router-dom";

import { Route } from "react-router-dom";
import { UserContext } from "../context/UserContext";

const PrivateRouter = (props) => {

    let history = useHistory();
    const { user } = useContext(UserContext);

    if (user && user.isAuthenticated === true) {
        return (
            <>
                <Route path={props.path} component={props.component} />
            </>
        )
    } else {
        return (
            <Redirect to='/login'></Redirect>
        )
    }


}

export default PrivateRouter