<template>
    <li>
        <h3> {{ fullName }}</h3>
        <h4> {{ teacherObj.price }}元/h </h4>
        <!-- <span v-for="area in teacherObj.areas" :key="area">{{ area }}</span> -->
        <base-badge v-for="area in teacherObj.areas" :key="area" :text="area"></base-badge>
        <div class="actions">
            <base-button :to="detailLink"  link>详情</base-button>
            <!-- <base-button :to="contactLink" mode="outline" link>联系</base-button> -->

        </div>
    </li>
</template>

<script>

export default {
    props:['teacherObj'],
    computed:{
        fullName() {
            return this.teacherObj.xing + this.teacherObj.ming;
        },
        detailLink() {
            return this.$route.path + '/' + this.teacherObj.id;
        },
        // contactLink() {
        //     return this.$route.path +  '/' + 'contact';
        // }
    }
}

</script>

<style scoped>
li {
  margin: 1rem 0;
  border: 1px solid #424242;
  border-radius: 12px;
  padding: 1rem;
}

h3 {
  font-size: 1.5rem;
}

h3,
h4 {
  margin: 0.5rem 0;
}

div {
  margin: 0.5rem 0;
}

.actions {
    /* padding:10rem; */
  display: flex;
  justify-content: flex-end;
}
</style>