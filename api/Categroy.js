import http from './http'
const CategoryUrl='api/category'

export default {
    queryCategroy(){
        return http.get(CategoryUrl)
    },
    insertCategroy(obj){
        return http.post(CategoryUrl,obj);
    },
    deleteCategroy(id){
        return http.delete(CategoryUrl+'/'+id);
    }
}