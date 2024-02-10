import axios from "axios";
import { baseURL } from "../../constants/urls/jsonplaceholder";

export const axiosService = axios.create({ baseURL });
