import http from './http'

let obj = {
    checkLogin(obj){
        return http.post('api/login',obj)
    }
};

export default obj;