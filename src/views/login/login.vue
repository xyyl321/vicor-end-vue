<template>
    <div class="box">
        <div class="formBox">
            <h2>闻香来饭店资产管理</h2>
            <el-form :rules="rules" :model="form" ref="ruleForm">
                <el-form-item prop="username">
                    <el-input v-model="form.username"  prefix-icon="el-icon-user-solid" placeholder="请输入用户名"  clearable></el-input>
                </el-form-item>
                <el-form-item  prop="password">
                    <el-input v-model="form.password" prefix-icon="el-icon-lock" show-password placeholder="请输入密码"  clearable></el-input>
                </el-form-item>
                <el-form-item >
                    <el-button type="primary" round style="display: block;margin: 0 auto" @click="submitForm">立即提交</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script>
    import Login from '../../../api/Login'
    import Code from '../../../api/Code'
    export default {
        name: "login",
        data(){
            return{
                url:'',
                form:{
                    username:'',
                    password:''
                },
                rules:{
                    username:[
                        {required:true,message:'用户名必填',trigger:'blur'},
                        {min:3,max:10,message:'用户名长度在3-10个字符之间',trigger:'blur'},
                    ],
                    password:[
                        {required:true,message:'密码必填',trigger:'blur'},
                        {min:6,max:20,message:'密码长度在6-20个字符之间',trigger:'blur'},
                    ]
                }
            }
        },
        methods:{
            submitForm(){
                this.$refs.ruleForm.validate((valid)=>{
                    if (valid){
                        // axios({
                        //     method:'post',
                        //     url:'http://www.sofa.com/api/login'
                        // }).then(function(res){
                        //     console.log(res);
                        // })

                        // this.$http.post('api/login',this.form,function (res) {
                        //     console.log(res);
                        // })

                        Login.checkLogin(this.form).then( (res)=> {
                            let data = res.data;
                            if (data.code === Code.CODE_SUCCESS){
                                sessionStorage.setItem('token',data.token);
                                let url = this.$route.query.redirect || '/';
                                this.$router.push({path:url});
                                this.$message.success(data.msg);
                            }else if(data.code === Code.CODE_FAIL){
                                this.$message.warning(data.msg);
                            }else{
                                this.$message.error(data.msg);
                            }
                        })
                    }
                })
            }
        }
    }
</script>

<style scoped>
    .box{
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: url('../../assets/img/background3.jpg') center / cover;
    }
    .formBox{
        position: absolute;
        width: 400px;
        height: auto;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
        background: rgba(255,255,255,0.9);
        padding: 20px 40px;
        box-sizing: border-box;
        border-radius: 25px;
    }
    .formBox > h2{
        line-height: 3;
        text-align: center;
    }
</style>