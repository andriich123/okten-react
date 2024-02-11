import axios from "axios";

import { baseURL } from "../../constants/urls/linkpc";

const apiService = axios.create({ baseURL });

export { apiService };
