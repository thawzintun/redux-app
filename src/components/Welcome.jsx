import React from "react";
import { useDispatch } from "react-redux";
import { authAction } from "../store/authReducer";

const Welcome = () => {
    const dispatch = useDispatch();
    const loginHandler = () => {
        dispatch(authAction.login());
    };
    return (
        <button className="welcome-btn" onClick={loginHandler}>
            Login to Redux Counter
        </button>
    );
};

export default Welcome;
