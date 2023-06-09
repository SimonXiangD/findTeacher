<template>

    <base-dialog :show="!!error" title="出错啦！" @close="handleError"  >
        <p>
            出错原因：{{ error }}
        </p> 
    </base-dialog>

    <base-card>
        <form @submit.prevent>
            <h1>
                登录/注册!
            </h1>
            <div class="form-control">
                <label for="email">邮箱</label>
                <input type="email" v-model.trim="email"> 
            </div>
            <div class="form-control">
                <label for="password">密码</label>
                <input type="password" v-model.trim="password">
            </div>
            <p v-if="!formIsValid">邮箱或密码输入格式有误!</p>

            <base-button v-show="!isLoading" @click="submitForm('login')">登录</base-button>
            <base-button v-show="!isLoading" @click="submitForm('signup')">注册</base-button>

            <base-spinner v-if="isLoading"></base-spinner>
        </form>
    </base-card>

</template>

<script>
export default {
    data() {
        return {
            userStatus:0, // 0 for login, 1 for signup
            email:'',
            password: '',
            formIsValid: true,
            mode:null,
            isLoading:false,
            error:null,
        }
    },

    methods: {
        async submitForm(mode) {
            this.mode = mode;
            this.formIsValid = true;
            const passwordReg = /^(?=.*?[a-z])(?=.*?[0-9]).{8,16}$/ ;
            if(!passwordReg.test(this.password)) {
                this.formIsValid = false;
                return ;
            }
            this.isLoading = true;
            let res;
            if(this.mode === 'signup') {
                
                res = await this.$store.dispatch('signup', {
                    email:this.email,
                    password:this.password,
                })

                // console.log(res)
                this.isLoading = false
                if(!res.error) {
                    this.$router.replace('/teachers')

                    return ;
                }
                else {
                    this.error = res.errorMessage
                }

            }
            else {
                res = await this.$store.dispatch('login', {
                    email:this.email,
                    password:this.password,
                })
                this.isLoading = false
                if(!res.error) {
                    const redirectUrl = '/' + (this.$route.query.redirect || 'teachers')
                    this.$router.replace(redirectUrl)

                    return ;
                }
                else {
                    this.error = res.errorMessage
                }
            }
        },

        handleError() {
            this.error = null;
        }
    }
    // watch : {
    //     email() {
    //         console.log(this.email);
    //     },
    // }
}
</script>

<style scoped>
.form-control {
  margin: 0.5rem 0;
}

label {
    font-weight: bold;
    display: block;
    margin-bottom: 0.5rem;
    font-size: 1.2rem;

}

input {
    display: block;
    width: 100%;
    font-size: 1.2rem;
    border: 1px solid #ccc;
    margin-bottom: 1.5rem;
}

</style>