<template>
<!-- <h1>nihao</h1> -->
<TheHeader></TheHeader>
<router-view></router-view>
</template>

<script>

import TheHeader from './components/Layout/TheHeader.vue';
export default {
    components: {
        TheHeader
    },

    created() {
        console.log('创建开始！')
        this.$store.dispatch('tryLogin');
        console.log('创建阶段结束！')
    }
}

</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300&family=ZCOOL+KuaiLe&display=swap');
  
* {
    box-sizing: border-box;
}

html {
    font-family: 'Roboto', sans-serif;
    font-family: 'ZCOOL KuaiLe', sans-serif;
    font-size: large
}

body {
    margin:0
}

</style>