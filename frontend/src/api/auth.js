import axios from "axios";
import { API_SERVER_HOST } from './apiClient';

const prefix = `${API_SERVER_HOST}`;

export const login = async (id, password) => {
    const formData = new URLSearchParams();
    formData.append("id", id);
    formData.append("password", password);

    const response = await axios.post(
        `${prefix}/login`,
        formData,
        {
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
            withCredentials: true,
        }
    );

    return response.data;
};

export const logout = async () => {
    const response = await axios.post(`${prefix}/logout`, null, {
        withCredentials: true,
    });

    return response.data;
};

export const checkLogin = async () => {
    const response = await axios.get(`${prefix}/api/auth/check`, {
        withCredentials: true,
    });

    return response.data.isAdmin;
};