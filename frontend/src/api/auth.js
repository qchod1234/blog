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

export async function checkLogin() {
    const response = await fetch(`${API_SERVER_HOST}/api/auth/check`, {
        credentials: "include",
    });
    if (!response.ok) throw new Error("인증 체크 실패");
    const data = await response.json();
    return data.isAdmin;
}