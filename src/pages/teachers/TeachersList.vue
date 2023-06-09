<template>
    <section>
        <search-teacher @change-filter="setFilter"></search-teacher>
    </section>

    <section>
        <base-card>
            <div class="controls">
                <base-button mode="outline" @click="loadTeachers"> 刷新 </base-button>
                <base-button link to="/register" v-if="this.$store.getters.isAuthenticated"> 注册成为教师！ </base-button>
                <base-button link to="/auth" v-if="!this.$store.getters.isAuthenticated"> 登录 </base-button>
            </div>
            <base-spinner v-if="isLoading"></base-spinner>
            <ul v-if="hasTeachers && !isLoading">
                <!-- <li v-for="teacher in teachers" :key=teacher.id>
                    {{ teacher.xing + teacher.ming }}
                </li> -->
                <teacher-li v-for="teacher in filteredTeacherList" 
                :key=teacher.id 
                :teacherObj="teacher"> </teacher-li>

            </ul>
            <h3 v-else v-show="!isLoading">目前没有老师...</h3>
            <!-- 列表 -->
        </base-card>
    </section>
</template>

<script>

import teacherLi from '@/components/teachers/teacherLi.vue';
import searchTeacher from '@/components/teachers/searchTeacher.vue';

export default {

    data() {
        return {
            filterStr: null,
            isLoading: false,
        }
    },

    components: {
        
        teacherLi,
        searchTeacher,
    },

    computed: {
        filteredTeacherList() {
            const teachers = this.$store.getters['teachers/teachers']
            if(!this.filterStr) return teachers;
            return teachers.filter(teacher => {
                const teacherValues = Object.values(teacher);
                // console.log(teacherValues)
                teacherValues.push(teacher.xing + teacher.ming)
                return (teacherValues.findIndex(val => {
                    return String(val).toLowerCase().includes(this.filterStr)
                }) > -1)
            })
        },

        hasTeachers() {
            return this.$store.getters['teachers/hasTeachers'];
        },

        // isTeacher() {
        //     if(this.$store.getters.isAuthenticated) {
        //         if()
        //     }
        // }
    },
    
    methods: {

        setFilter(filter) {
            this.filterStr = filter.trim().toLowerCase()
        },

        async loadTeachers() {
            this.isLoading = true
            await this.$store.dispatch('teachers/loadTeachers');
            this.isLoading = false
        }
    },

    created() {
        this.loadTeachers();
    },

    // updated() {
    //     this.loadTeachers();
    // }

} 



</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.controls {
  display: flex;
  justify-content: space-between;
}

h3 {
    text-align: center;
}
</style>