import axios from "./axios";

export const registerRequest= User => axios.post ("/register", User);

export const loginRequest = User => axios.post(`/login`, User);

export const verityToken = () => axios.get("/verify")


