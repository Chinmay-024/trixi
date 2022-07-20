import axios from "axios";
import { loginFailure, loginStart, loginSuccess } from "./AuthActions";
const axiosInstance = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
});
export const login = async (user, dispatch) => {
    dispatch(loginStart());
    try {
        console.log(user);
        const res = await axiosInstance.post("/auth/login", user);
        console.log(res.data);
        dispatch(loginSuccess(res.data));
    } catch (err) {
        dispatch(loginFailure());
    }
};
