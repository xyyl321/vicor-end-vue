<template>
    <div>
        <el-form :inline="true" :model="form" class="demo-form-inline">
            <el-form-item label="分类名称">
                <el-input v-model="form.cname" placeholder="分类名称"></el-input>
            </el-form-item>
            <el-form-item label="排序">
                <el-input v-model="form.sort" placeholder="排序序列"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="onAdd">添加一级分类</el-button>
            </el-form-item>
        </el-form>
        <el-tree :data="datas" :props="defaultProps"
                 show-checkbox
                 node-key="id"
                 default-expand-all
                 :expand-on-click-node="false"
        >
            <span class="custom-tree-node" slot-scope="{ node, data }">
                <span>{{ node.label }}</span>
                <span>
                  <el-button
                          type="text"
                          size="mini"
                          @click="() => append(data)">
                    Append
                  </el-button>
                    <el-button
                            type="text"
                            size="mini"
                            @click="()=>edits(data)"

                    >

                    Edit
                  </el-button>
                  <el-button
                          type="text"
                          size="mini"
                          @click="() => remove(node, data)"
                  >
                    Delete
                  </el-button>
                </span>
            </span>
        </el-tree>
        <el-dialog title="编辑分类" :visible.sync="dialogFormVisible" :modal="false">
            <el-form :model="formEdit">
                <el-form-item label="分类名称" :label-width="formLabelWidth">
                    <el-input v-model="formEdit.cname" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="分类排序" :label-width="formLabelWidth">
                    <el-input v-model="formEdit.sort" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="所属父级" :label-width="formLabelWidth">
                    <el-select :v-for="item in catedata" v-model="formEdit.pid" placeholder="请选择所属父级">
                        <el-option  :label="item.cname" :value="item.cid"
                                   :key="item.cid"
                        ></el-option>
                    </el-select>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="dialogFormVisible = false">取 消</el-button>
                <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
            </div>
        </el-dialog>
    </div>
</template>

<script>
    import Categroy from "../../../api/Categroy";
    import Code from "../../../api/Code";
    export default {
        name: "Categroy",
        data(){
            return {
                form: {
                    cname: '新增分类',
                    sort: 10
                },
                datas:[],
                defaultProps: {
                    children: 'children',
                    label: 'cname'
                },
                formEdit:{
                    'cname':'',
                    'sort':'',
                    'pid':''
                },
                dialogTableVisible: false,
                dialogFormVisible: false,
                formLabelWidth: '120px'
            }
        },
        computed:{
          catedata(){
              let datas=this.datas;
              let arr=datas.map(ele=>({cid:ele.cid,cname:ele.cname,sort:ele.sort}))
              return arr;
          }
        },
        methods:{
            getData(){
                Categroy.queryCategroy().then((res)=>{
                    let result = res.data
                    if (result.code === Code.CODE_SUCCESS){
                        this.datas = result.data
                    }
                })
            },
            append(data) {
                let obj=Object.assign({},this.form);
                obj.pid=data.cid;
                Categroy.insertCategroy(obj).then(res=>{
                    // console.log(res);
                    let result=res.data;
                    if(result.code==Code.CODE_SUCCESS){
                        obj.cid=result.lastId;
                        if (!data.children) {
                            this.$set(data, 'children', []);
                        }
                        data.children.push(obj);
                    }else{
                        this.$message.error(result.msg);
                    }
                })
            },
            onAdd(){
                let obj=Object.assign({},this.form);
                Categroy.insertCategroy(obj).then(res=>{
                    let result=res.data;
                    if(result.code==Code.CODE_SUCCESS){
                        this.datas.push(obj);
                    }else{
                        this.$message.error(result.msg);
                    }
                })
            },
            remove(node, data) {
                // console.log(node);
                // console.log(data);
                const parent = node.parent;
                const children = parent.data.children || parent.data;
                const index = children.findIndex(d => d.cid === data.cid);
                Categroy.deleteCategroy(data.cid).then(res=>{
                    let result=res.data;
                    if(result.code==Code.CODE_SUCCESS){
                        children.splice(index, 1);
                    }else{
                        this.$message.error(result.msg);
                    }
                })
            },
            edits(data){
                this.dialogFormVisible = true;
                this.formEdit=Object.assign({},data);
            }

        },
        mounted() {
            this.getData();
        }
    }
</script>

<style scoped>

</style>