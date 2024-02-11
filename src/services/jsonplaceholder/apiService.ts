import axios from "axios";

import { baseURL } from "../../constants/urls/jsonplaceholder";

const apiService = axios.create({ baseURL });

export { apiService };
