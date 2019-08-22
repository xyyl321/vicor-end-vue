import axios from 'axios'

const instance = axios.create({
    baseURL:'http://www.vicor-end.com/',
    timeout:1000
});


instance.interceptors.request.use(function (config) {
    // Do something before request is sent
    if (sessionStorage.getItem('token')){
        config.headers.Authorization = sessionStorage.getItem('token')
    }
    return config;
}, function (error) {
    // Do something with request error
    return Promise.reject(error);
});
// Add a response interceptor
instance.interceptors.response.use(function (response) {
    // Do something with response data
    return response;
}, function (error) {
    // Do something with response error
    return Promise.reject(error);
});

export default instance;
