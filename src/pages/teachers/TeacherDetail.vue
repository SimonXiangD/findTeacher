<template>
    <section>
        <base-card>
            <h3> {{ fullName }}</h3>
            <h4> {{ teacherObj.price }}元/h </h4>
        </base-card>
        <!-- <section> -->
        <base-card>
            <h3>{{ propaganda }}</h3>
            <base-button :to="contactLink" mode="outline" link>联系</base-button>
            <router-view @save-data="saveData"></router-view>
        </base-card>

    <!-- </section> -->
        <base-card>
            <base-badge v-for="area in teacherObj.areas" :key="area" :text="area"> </base-badge> 
                <!-- <div class="actions">
                    <base-button :to="detailLink"  link>详情</base-button>
                    

                </div> -->
            <h3>{{teacherObj.description}}</h3>
        </base-card>
        <!-- 细节
        <router-view></router-view> -->
    </section>
</template>

<script>

export default {
    props:['id'],

    data() {
        return {
            teacherObj: null
        }
    },

    methods: {
        saveData(data) {
            // console.log(data)
            this.$store.dispatch('requests/contactTeacher', data);
            this.$router.replace('/requests')

        }
    },

    created() {
        this.teacherObj = this.$store.getters['teachers/teachers'].find(teacher=>teacher.id==this.id);
    },

    computed:{
        fullName() {
            return this.teacherObj.xing + this.teacherObj.ming;
        },
        detailLink() {
            return this.$route.path + '/' + this.teacherObj.id;
        },
        contactLink() {
            if(this.$route.path.endsWith('contact')) return this.$route.path;
            return this.$route.path + '/' + 'contact';
        },
        propaganda() {
            return this.teacherObj.propaganda ? this.teacherObj.propaganda : '感兴趣吗？立马联系我！'
        }
    }
}

</script>