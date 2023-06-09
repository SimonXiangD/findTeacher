<template>

    <base-dialog :show="error" title="你不是教师哦~" @close="handelError" >
        错误提示
    </base-dialog>

    <base-card>
        <header>
            <h3 >以下为所有请求</h3>  
            <base-button style="margin: 0 0 1rem 0;" @click="loadRequests">刷新</base-button>


        </header>


        <base-spinner v-if="isLoading"></base-spinner>

        <ul v-if="hasRequests && !isLoading && !!this.$store.getters.token">
            <request-li v-for="request in filteredRequests" :key="request.id" :request="request"></request-li>

        </ul>
        <div v-else v-show="!isLoading && !!this.$store.getters.token">
            <p style="text-align: center;">
                尚未收到任何请求！
            </p>
        </div>
    </base-card>
</template>

<script>
import requestLi from './../../components/requests/requestLi.vue'

export default {

    data() {
        return {
            isLoading:false,
            error:false
        }
    },

    components:{
        requestLi,
    },

    computed: {
        filteredRequests() {
            return this.$store.getters['requests/requests']
        },

        hasRequests() {
            return this.$store.getters['requests/hasRequests']
        },

    },

    methods: {
        async loadRequests() {
            this.isLoading = true;
            let res = await this.$store.dispatch('requests/loadRequests');
            if(res && res.error) {
                this.error = true
            }
            this.isLoading = false;
        },

        handelError() {
            this.error = false
        }
    },

    created() {
        this.loadRequests();
    }

}
</script>

<style scoped>

header {
  text-align: center;
  /* font-size */
}

ul {
  list-style: none;
  margin: 2rem auto;
  padding: 0;
  max-width: 30rem;
}

h3 {
  text-align: center;
  font-size: 1.8rem
}

</style>