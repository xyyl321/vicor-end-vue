import http from './http'
const GoodsUrl='api/goods'

export default {
    queryGoods() {
        return http.get(GoodsUrl)
    },
    // insertCategroy(obj){
    //     return http.post(GoodsUrl,obj);
    // },
    // deleteCategroy(id){
    //     return http.delete(GoodsUrl+'/'+id);
    // }
}
