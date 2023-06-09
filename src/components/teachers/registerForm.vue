<template>
    <!-- <base-card> -->
        <form @submit.prevent>
            <div class="form-control">
                <label for="xing">姓</label>
                <input type="text" id="xing" v-model.trim="xing">
            </div>
            <div class="form-control">
                <label for="ming">名</label>
                <input type="text" id="ming" v-model.trim="ming">
            </div>
            <div class="form-control">
                <label for="description">描述</label>
                <textarea id="description" rows="5" v-model.trim="description"></textarea>
            </div>
            <div class="form-control">
                <label for="price">时薪</label>
                <input type="number" id="price" v-model.number="price" />
            </div>
            
        </form>
        <div class="form-control">
            <label for="area">领域</label>
            <input type="text" id="area" v-model.trim="area" @keyup.enter="addArea">
        </div>
        <div>
            <base-badge v-for="area in areas" :key="area" :text="area" deleteMode
            @delete-badge="deleteBadge" ></base-badge>
        </div>
        <base-button @click="submitForm">注册！</base-button>
    <!-- </base-card> -->
</template>

<script>

export default {
    data() {
        return {
            xing:'',
            ming:'',
            description:'',
            price:0,
            areas:[],
            area:null

        }
    },  

    methods: {

        validateForm() {
          const ChDict = {
            'xing': '姓',
            'ming': '名',
            'price': '时薪',
            'areas': '领域',
            'description': '描述',
          }
          // JSON.parse(JSON.stringify(myProxy))
          const thisData = Object.entries(JSON.parse(JSON.stringify(this.$data)))
          console.log(thisData)
          for(let i = 0; i < thisData.length; i++) {
            if(thisData[i][0] == 'areas') {
                console.log('asfdgs')
                if(thisData[i][1].length) continue;
                alert('没有正确输入' + "'" + ChDict[thisData[i][0]] + "'!")
                return false;

              } 
            if(!thisData[i][1] && thisData[i][0] != 'area') {
              
              alert('没有正确输入' + "'" + ChDict[thisData[i][0]] + "'!")
              return false;
            }
          }
          return true;
        },

        submitForm() {
          if(!this.validateForm()) return ;
          const savedRegisterData = {
            xing:this.xing,
            ming:this.ming,
            description: this.description,
            price:this.price,
            areas:this.areas,
            teacherId:this.$store.getters.userId,
          }

          this.$emit('save-data', savedRegisterData)
          // console.log(savedRegisterData)
        },

        addArea() {
          if(this.area) {
            if(this.areas.findIndex(area=>area == this.area) == -1) 
            {
              this.areas.push(this.area)
            }
              
          }
            
          this.area = null
        },

        deleteBadge(text) {
          console.log(text);
          this.areas.splice(this.areas.findIndex(area=>area==text), 1);
        }

    }
}

</script>

<style scoped>
.form-control {
  margin: 0.5rem 0;
}

label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

input,
textarea {
  display: block;
  width: 100%;
  border: 1px solid #ccc;
  font: inherit;
}

input:focus,
textarea:focus {
  background-color: #f0e6fd;
  outline: none;
  border-color: #3d008d;
}

h3 {
  margin: 0.5rem 0;
  font-size: 1rem;
}

.invalid label {
  color: red;
}

.invalid input,
.invalid textarea {
  border: 1px solid red;
}
</style>