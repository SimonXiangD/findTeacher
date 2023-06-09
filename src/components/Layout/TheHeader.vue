<template>
    <header>
        <nav>
            <h1>
                <router-link to="/">问 学</router-link> 
            </h1>
            <ul id="headList">
                <li > <router-link to="/teachers">老师列表</router-link> </li>
                <li v-if="isLoggedIn"> <router-link to="/requests">请求列表</router-link> </li>
                <li v-if="!isLoggedIn"> <router-link to="/auth">登录</router-link> </li>
                <li v-if="isLoggedIn"> 
                  <base-button @click="logOut">登出</base-button>
                </li>
            </ul>
        </nav>
    </header>
</template>


<script>

export default {
  computed: {
    isLoggedIn() {
      return !!this.$store.getters.isAuthenticated
    }
  },

  methods: {
    logOut() {
      this.$store.dispatch('logout')
    }
  }
}

</script>

<style scoped>



* {
    font-size: 2rem;
}

header {
  width: 100%;
  height: 6rem;
  background-color: #8d005c;
  display: flex;
  justify-content: center;
  align-items: center;
}

header a {
  text-decoration: none;
  color: #ffe4f3;
  display: inline-block;
  padding: 0.75rem 1.5rem;
  border: 1px solid transparent;
}

 
ul > li >a:active,
ul > li >a:hover,
a.router-link-active {
  border: 0.2rem solid #ffffff;
  border-radius: 25px;
}

h1 {
  margin: 0;
}

h1 a {
  color: white;
  margin: 0;
}

h1 a:hover,
h1 a:active,
h1 a.router-link-active {
  border-color: transparent;
}

header nav {
  width: 90%;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

header ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

li {
  margin: 0 0.5rem;
  /* border-radius: 10px; */

}
</style>