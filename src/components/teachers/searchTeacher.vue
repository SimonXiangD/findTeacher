<template>
    <base-card>
        <!-- <span >搜索</span> -->
        <input type="text" @input="setFilter" placeholder="输入搜索内容">
    </base-card>
</template>

<script>

export default {
    methods:{
        setFilter(event) {
            this.$emit('change-filter', event.target.value)
        }
    }
}

</script>

<style scoped>
/* input[type=text] {
  background-color: white;
  background-image: url('./../../assets/searchIcon.png');
  background-position: 10px 10px;
  background-repeat: no-repeat;
  padding-left: 40px;
} */


input {
    /* display: inline; */
    /* border-radius: 10px;
    height: 2rem;
    border: 1px solid ;
    width: 100%; */
    width: 100%;
    margin: 8px 0;
    display: inline-block;
    border: 1px solid #000000;
    box-shadow: inset 0 1px 3px #ddd;
    border-radius: 20px;

    font-family: inherit;
    font-size: inherit;

    box-sizing: border-box;
    padding-left: 20px;
    padding-right: 20px;
    padding-top: 12px;
    padding-bottom: 12px;
}

</style>