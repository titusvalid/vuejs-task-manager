<template>
    <div :class="[task.confirm ? 'confirm' : '', 'task']">

    
        <h1>{{task.text}}</h1>
        
    
    <h1>{{task.day}}</h1>

    <Button  @click="removetask(task.id)"   Text="cancella"/>
    <Button  @click="confirm(task.id)"   Text="completo"/>

    <form @submit="onSubmit(task.id)" onsubmit="return false" class="edit"> 
    <input type="text"  v-model="text" name="text" placeholder="Enter e conferma" />
    </form>
    </div>
</template>





<script>


import Button from "./Button.vue"
export default {
    name:"Task",
    
    data() {
        return {
         text: '',
         id:'',
        }},

    props:{
        task:Object,
    },
    components:{
        Button,
    },
    methods:{
        removetask(id){
            this.$emit("removetask", id)
        },
        confirm(id){
            this.$emit("confirm", id)
        },
        onSubmit(id1) {
            const payload = {
                text: this.text,
                id: id1,
            }
            console.log("task",this.text,id1)
            
            this.$store.commit('editText', payload)
            },
            
    },
}
</script>








<style>
.task {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-content: stretch;
    

}
.task.confirm {
  background-color: burlywood;
      width: min-content;
}

.btn {
  display: inline-block;
  
  color: rgb(14, 6, 6);
  border: none;
  padding: 10px 20px;
  margin: 5px;
  border-radius: 5px;
  cursor: pointer;
  text-decoration: none;
  font-size: 15px;
  font-family: inherit;
}


.fas {
  color: red;
}
.task {
 
  margin: 5px;
  padding: 10px 20px;
  cursor: pointer;
}

.task h3 {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

</style>