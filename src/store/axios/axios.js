import axios from "axios";

 export const axios_instance = axios.create({
    baseURL: 'https://api.mochi-match.work'
 })

 axios_instance.interceptors.request.use(function (config) {
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjQ4MzI4OTA1MDcsImlhdCI6MTU5Mjg5MDUwNywiaXNfYWRtaW4iOnRydWUsInN1YiI6IjRhNDhjZTg0LTNhNGItNGQyNy1iZDI1LWVjMDE0MGMwYTRmNSJ9.K0ovga9V9yx8tRYagEbV6M2HHxm7P3h5v50zg-e5LNs'
    config.headers.Authorization = token;

    return config;
});