<template>
    <div>
        <el-tabs v-model="activeName">
            <el-tab-pane label="商品查看" name="first">
                <el-table
                        :data="tableData"
                        style="width: 100%">
                    <el-table-column
                            prop="date"
                            label="日期"
                            width="180">
                    </el-table-column>
                    <el-table-column
                            prop="name"
                            label="姓名"
                            width="180">
                    </el-table-column>
                    <el-table-column
                            prop="address"
                            label="地址">
                    </el-table-column>
                </el-table>
            </el-tab-pane>
            <el-tab-pane label="商品添加" name="second">
                <el-form ref="form" :model="form" label-width="100px">
                    <el-form-item label="商品所属分类">
                        <el-select v-model="form.cid" placeholder="请选择商品分类">
                            <el-option
                                    label="区域一"
                                    value="shanghai"
                            ></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="商品中文名称">
                        <el-input v-model="form.gcname"></el-input>
                    </el-form-item>
                    <el-form-item label="商品英文名称">
                        <el-input v-model="form.gename"></el-input>
                    </el-form-item>
                    <el-form-item label="商品价格">
                        <el-input v-model="form.price"></el-input>
                    </el-form-item>
                    <el-form-item label="商品颜色">
                        <el-input v-model="form.gcolors"></el-input>
                    </el-form-item>
                    <el-form-item label="商品规格">
                        <el-input v-model="form.gsize"></el-input>
                    </el-form-item>
                    <el-form-item label="商品种类">
                        <el-input v-model="form.gtype"></el-input>
                    </el-form-item>
                    <el-form-item label="商品库存">
                        <el-input v-model="form.gstock"></el-input>
                    </el-form-item>
                    <el-form-item label="配送信息">
                        <el-input v-model="form.gdel"></el-input>
                    </el-form-item>
                    <el-form-item label="商品描述">
                        <el-input type="textarea" v-model="form.description"></el-input>
                    </el-form-item>
                    <el-form-item label="商品缩略图">
                        <el-input v-model="form.gthumb"></el-input>
                    </el-form-item>
                    <el-form-item label="商品轮播图">
                        <el-input v-model="form.gbanner"></el-input>
                    </el-form-item>

                    <el-form-item>
                        <el-button type="primary" @click="insertGoods">添加商品</el-button>
                        <el-button @click="resetGoods">重置</el-button>
                    </el-form-item>
                </el-form>
            </el-tab-pane>
        </el-tabs>
    </div>
</template>

<script>
    export default {
        name: "Goods",
        data(){
            return {
                activeName:'first',
                tableData: [{
                    date: '2016-05-02',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    date: '2016-05-04',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1517 弄'
                }, {
                    date: '2016-05-01',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1519 弄'
                }, {
                    date: '2016-05-03',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1516 弄'
                }],
                form: {
                    cid:'',
                    gcname:'',
                    gename:'',
                    gcolors:'',
                    description:'',
                    price:'',
                    gbanner:'',
                    gthumb:'',
                    gdetail:'',
                    gsize:'',
                    gtype:'',
                    gstock:'',
                    gdel:''
                }
            }
        },
        methods:{
            insertGoods(){

            },
            resetGoods(){

            }
        }
    }
</script>

<style scoped>

</style>