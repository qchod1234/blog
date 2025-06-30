import axios from "axios";
import { API_SERVER_HOST } from './apiClient';

const prefix = `${API_SERVER_HOST}/api/board`;

export const getList = async () => {
    const response = await axios.get(`${prefix}/list`)

    return response.data
}

export const commentAdd = async (BoardData) => {

    const response = await axios.post(`${prefix}/input` , BoardData)

    return response.data
}

export const deleteComment = async (BoardData) => {

    await axios.post(`${prefix}/delete` , BoardData)

}