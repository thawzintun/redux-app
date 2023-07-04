import React from "react";
import { useDispatch } from "react-redux";
import { authAction } from "../store/authReducer";

const NavBar = ({ isLogin }) => {
    const dispatch = useDispatch();
    const logoutHandler = () => {
        dispatch(authAction.logout());
    };
    return (
        <nav>
            <h1>Redux Counter</h1>
            {isLogin && (
                <ul>
                    <li>My Records</li>
                    <li>Profile</li>
                    <li>
                        <button onClick={logoutHandler}>Logout</button>
                    </li>
                </ul>
            )}
        </nav>
    );
};

export default NavBar;
