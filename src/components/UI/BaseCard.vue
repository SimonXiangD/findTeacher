<template>
      <Transition name="fade" v-show="show = !show">

    <div class="card" >
      <!-- <Transition> -->
        
      <!-- </Transition> -->
      <slot></slot>

      
        
    </div>
  </Transition>  
</template>

<script>
export default {
  data() {
    return {
      show:true
    }
  }
}
</script>

<style scoped>
.card {
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  margin: 2rem auto;
  /* border: 10rem; */
  max-width: 40rem;
}

.fade-enter-active {
  transition: opacity 1s ease;
}

.fade-enter-from
 {
  opacity: 0;
}
</style>