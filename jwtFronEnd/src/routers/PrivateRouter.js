import { useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";

import { Route } from "react-router-dom";
import { UserContext } from "../context/UserContext";

const PrivateRouter = (props) => {

    let history = useHistory();
    const { user } = useContext(UserContext);

    useEffect(() => {
        console.log("Check context user >>>>>", user)
        let session = sessionStorage.getItem("account");
        if (!session) {
            history.push("/login")
            window.location.reload()
        }
    }, [])

    return (
        <>
            <Route path={props.path} component={props.component} />
        </>
    )
}

export default PrivateRouter