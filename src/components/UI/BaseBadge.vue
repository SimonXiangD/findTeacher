<template>
    <span class="badge textColor" @click="deleteSpan" >
        {{processedText}} 
    </span>
    
</template>

<script>

export default {
    methods: {
        stringToColour : function(str) {
            if(!str) return '#ffffff'
            let hash = 0;
            for (let i = 0; i < str.length; i++) {
                hash = str.charCodeAt(i) + ((hash << 5) - hash);
            }
            let colour = '#';
            for (let i = 0; i < 3; i++) {
                let value = (hash >> (i * 8)) & 0xFF;
                colour += ('00' + value.toString(16)).substr(-2);
            }
            return colour; 
        },

        deleteSpan() {
            if(this.deleteMode) {
                this.$emit('delete-badge', this.text)
            }
        },
    },


    props:{
        text : {
            type:String,
            required:false,
            default:null
        },

        deleteMode: {
            type:Boolean,
            required:false,
            default:false,
        }
    },

    computed: {
        processedText() {
            return this.text;
        },

        badgeColor() {
            return this.stringToColour(this.text);
        },




    }


}
</script>

<style scoped>
.badge {
  background-color: #ccc;
  color: #252525;
  border-radius: 30px;
  padding: 0.5rem 1.5rem;
  display: inline-block;
  margin-right: 0.5rem;
  margin-bottom: 0.5rem;
}



.textColor {

  background-color: v-bind(stringToColour(text));
  color:white;
}

</style>