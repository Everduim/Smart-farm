import axios from "axios";

export const APIHeaders = {
    Accept: "application/json",
    "Content-Type": "application/json",
    "Acess-Control-Allow-Origin": "*",
    Authorization: {
        toString() {
            return `Bearer ${localStorage.getItem("token")}`;
        }
    }
}

export const API = axios.create({
    baseURL: "http://localhost:3000/",
    headers: APIHeaders,
})