<template>
<div class="all">
    <div :class="[task.confirm ? 'confirm' : '', 'tasks']"
    :key="task.id"   v-for="task in tasks">


        
   
    <Task @removetask="$emit('removetask',task.id)" 
          @confirm="$emit('confirm',task.id)"   
          @edittask="$emit('edittask',this.text1,task.id)"   
            
     :task="task"  />
        
    <Button  @click="onSubmit(task.id)"   Text="conferma"/>
   
    </div>
</div>
</template>



<script>
import Task from "./Task.vue"
import Button from "./Button.vue"
import {computed} from 'vue';
import {useStore} from "vuex";


export default {
    name:"Tasks",
    setup(){
        const store = useStore();

        let payload = computed(function () {
            return store.state.payload
        })
        return {
            payload,
        }
        },
    
    data() {
        return {
            text1: "",
            id1:"",
        }},

    methods:{
        
        onSubmit(id) {
            
            this.text1=this.payload.text;
            this.id1=this.payload.id;
            this.$emit("edittask", this.text1, id)
    },
    },
    props:{
        tasks: Array,
    },
    components:{
        Task,
        Button,
    },

}

</script>

<style>


.add-form{
    width: 42vw;
    margin: auto;

}
.tasks{
    width: min-content;
    border: 0.5vw;
    border-radius: 25px;
    border-style: inset;
    margin-top: 31px;
}
.fake{
    display: none;
}
.edit{
    display: table;
    padding-top: 15px;
}
.tasks.confirm {
    width: min-content;
  background-color: burlywood;
}

.task {
    display: grid;
    align-content: stretch;
    justify-content: center;
    grid-template-rows: 100px 50px 50px 50px 30px;
    width: auto;
}
.task.confirm {
    
    background-color: burlywood;
    width: auto;
}
.form-control{
    margin-top: 10px;
}


.all{
    background: aquamarine;
    margin: auto;
    padding-left: 27px;
    padding-right: 26px;
    padding-bottom: 28px;
    display: flex;
    justify-content: space-between;
    position: relative ;
    flex-wrap: wrap;
    border: aqua;
    width: 70%;
    border-style: groove;
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
padding: 0px 20px;
  
}

.task h3 {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

</style>








