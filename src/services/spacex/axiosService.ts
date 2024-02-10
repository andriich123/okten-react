import axios from "axios";
import { baseURL } from "../../constants/urls/spacex";

export const axiosService = axios.create({ baseURL });
