<template>
    <teleport to="body">
        <div v-if="show" @click="tryClose" class="backdrop"></div>
    </teleport>

    <!-- <transition> -->
        <dialog open v-if="show">
            <header>
                <slot name="header">
                    <h2>{{ title }}</h2>
                </slot>
            </header>
            <section>
                <slot></slot>
            </section>
            <menu v-if="!fixed">
                <slot name="actions">
                    <base-button @click="tryClose">关闭 </base-button>
                </slot>
            </menu>
        </dialog>
    <!-- </transition> -->

</template>

<script>

export default {
    emits:['close'],

    props: {
        show: {
                type:Boolean,
                required:true,
            },

        fixed: {
            type:Boolean,
            required: false,
            default: false,
        },

        title: {
            type:String,
            required:false,
            default:'标题',
        }
    },


    methods: {
        tryClose() {
            // console.log(this.fixed)

            if(this.fixed) return;
            this.$emit('close');
        }
    }


}

</script>

<style scoped>


.backdrop {
    position:fixed;
    top: 0;
    left: 0;
    height:100vh;
    width:100%;
    z-index: 10;
    background-color: rgba(0, 0, 0, 0.75);

}


dialog {
  position: fixed;
  top: 20vh;
  left: 10%;
  width: 80%;
  z-index: 100;
  border-radius: 12px;
  border: none;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 0;
  margin: 0;
  overflow: hidden;
  background-color: white;
}

header h2 {
    padding:0.5rem;
  margin: 0;
}

section {
  padding: 1rem;
}

menu {
  padding: 1rem;
  display: flex;
  justify-content: flex-end;
  margin: 0;
}

</style>