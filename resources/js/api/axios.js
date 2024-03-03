import axios from "axios";

let baseApiUrl = appDataObj.appUrl;//This can be found in view/app.blade.php

export default axios.create({
    baseURL: baseApiUrl,
    withCredentials: true,
    headers: { 'Content-Type': 'application/json' }
});