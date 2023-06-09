<template>
    <section>
        <!-- 联系老师 -->
        <!-- <router-view></router-view> -->
        <form @submit.prevent="submitForm">
            <div class="form-control">
                <label for="email">邮箱</label>
                <input type="email" id="email" v-model.trim="email">
            </div>
            <div class="form-control">
                <label for="message">信息</label>
                <input type="textarea" rows="5" id="message" v-model.trim="message">
            </div>
            <div class="actions">
                <base-button>提交！</base-button>
            </div>

        </form>
    </section>
</template>

<script>
export default {
    data() {
        return {
            email:null,
            message:'',
        }
    },

    methods: {
        isValid() {
            if(!this.email) {
                alert('邮箱未输入！')
                return false;
            } 
            if(!this.email.includes('@')) {
                alert('邮箱格式错误！')
                return false;
            }
            if(!this.message) {
                alert('信息未输入！')
                return false;
            }
            return true;

        },

        submitForm() {
            if(!this.isValid()) return ;
            const submitData = {
                email:this.email,
                message:this.message,
                teacherId:this.$route.params.id,
            }
            // console.log(submitData)
            this.$emit('save-data', submitData)
             
        }
    }
}
</script>


<style scoped>
form {
  margin: 1rem;
  border: 1px solid #ccc;
  border-radius: 12px;
  padding: 1rem;
}

.form-control {
  margin: 0.5rem 0;
}

label {
  font-weight: bold;
  margin-bottom: 0.5rem;
  display: block;
}

input,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  border: 1px solid #ccc;
  padding: 0.15rem;
}

input:focus,
textarea:focus {
  border-color: #3d008d;
  background-color: #faf6ff;
  outline: none;
}

.errors {
  font-weight: bold;
  color: red;
}

.actions {
  text-align: center;
}
</style>