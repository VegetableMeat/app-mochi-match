import axios from "axios";

export const axios_instance = axios.create({
   baseURL: 'https://api.mochi-match.work'
})

axios_instance.interceptors.request.use(function (config) {
   const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjUxOTI5Nzg5MTksImlhdCI6MTU5Mjk4MjUxOSwiaXNfYWRtaW4iOnRydWUsInN1YiI6IjEifQ.Y0KpGU1JaVoZolEDNUwbgjj24nR8sCuJa5_1kaZ5ZjM'
   config.headers.Authorization = token;

   return config;
});
