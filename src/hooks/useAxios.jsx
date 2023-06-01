import { useEffect } from "react";
import axios from "axios";
import useAuth from "./useAuth";

const useAxios = () => {
    const { logOutUser } = useAuth();

    const AXIOS = axios.create({
        baseURL: "http://localhost:5000"
    })

    useEffect(() => {

        // Add a request interceptor
        AXIOS.interceptors.request.use((config) => {
            const token = localStorage.getItem('access_token');
            if (token) {
                config.headers.Authorization = `Bearer ${token}`;
            }
            return config;
        }, (error) => {
            return Promise.reject(error);
        });


        // Add a response interceptor
        AXIOS.interceptors.response.use((response) => {
            return response;
        }, async (error) => {

            if (error.response && (error.response.status === 401 || error.response.status === 403)) {
                // await logOutUser();
            }
            return Promise.reject(error);
        });
    }, [logOutUser, AXIOS]);

    return [AXIOS];
}

export default useAxios;