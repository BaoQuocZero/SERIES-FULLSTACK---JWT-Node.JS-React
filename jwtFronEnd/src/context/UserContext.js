import React, { useEffect, useState } from "react";
import { getUserAccount } from '../services/userServices'

const UserContext = React.createContext(null);

const UserProvider = ({ children }) => {

    // User is the name of the "data" that gets stored in context
    const [user, setUser] = useState({
        isLoading: true,
        isAuthenticated: false,
        token: "",
        account: {}
    });

    // Login updates the user data with a name parameter
    const loginContext = (userData) => {
        setUser({ ...userData, isLoading: false });
    };

    // Logout updates the user data to default
    const logout = () => {
        setUser({
            isLoading: false,
            isAuthenticated: false,
            token: "",
            account: {}
        });
    };

    const fetchUser = async () => {
        console.log("Fetching user..."); // kiểm tra xem fetchUser có được gọi không
        let response = await getUserAccount();
        console.log("Response from getUserAccount:", response); // kiểm tra phản hồi

        if (response && response.EC === 0) {
            let groupWithRoles = response.DT.groupWithRole;
            let email = response.DT.email;
            let username = response.DT.username;
            let token = response.DT.access_token;

            let data = {
                isAuthenticated: true,
                token,
                account: { groupWithRoles, email, username },
                isLoading: false
            };

            setUser(data);
            console.log("User data set:", data); // kiểm tra giá trị user sau khi cập nhật
        } else {
            setUser(prevUser => ({ ...prevUser, isLoading: false })); // đặt lại isLoading nếu điều kiện không đúng
            console.log("Setting isLoading to false due to failed condition check");
        }
    };

    useEffect(() => {
        console.log("User loading state before fetchUser:", user.isLoading);
        fetchUser();
    }, []);

    return (
        <UserContext.Provider value={{ user, loginContext, logout }}>
            {children}
        </UserContext.Provider>
    );
}

export { UserContext, UserProvider };