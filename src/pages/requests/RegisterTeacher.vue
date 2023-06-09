<template>
    <base-card>
        <h1>注册成为教师吧！</h1>
        <register-teacher @save-data="saveData"></register-teacher>
    </base-card>
</template>

<script>
import registerTeacher from './../../components/teachers/registerForm.vue'

export default {
    components: {
        registerTeacher,
    },
    methods:{
        saveData(data) {
            this.$store.dispatch('teachers/registerTeacher', data);
            this.$router.replace('/teachers')
        }
    }
}
</script>