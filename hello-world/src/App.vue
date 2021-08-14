<template>
  <div >
    
    <a
    :href="href"
    @click.prevent="go">
    <slot></slot>
    </a>
    

    <AddTask
           @addtask="addtask"
    />
    
    <Tasks @removetask="removetask"   
           @confirm="confirm" 
           @edittask="edittask"  


    :tasks="tasks"/>
  </div>
  
</template>




 


<script>
/* eslint-disable vue/no-unused-components */
import AddTask from "./components/AddTask.vue"
import Tasks from "./components/Tasks.vue"
import routes from './routes'
import Master from './pages/Master.vue'




export default {
  name:"App",
  components:{ 
    AddTask,
    Tasks,
    Master,
    

  },
  methods:{
    //setname(newName){
      //console.log("out" ,this.$store.state.name)
      //this.$store.state.name=newName
    //},

    go () {
      this.$root.currentRoute = this.href
      window.history.pushState(null, routes[this.href], this.href)
    },
    async edittask(textnew, id){
        

        const edittask = await this.fetchTask(id)
        const updTask = { ...edittask, text: textnew }
        const res = await fetch(`http://localhost:5000/tasks/${id}`, {
        method: 'PUT',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify(updTask),
      })
      const data = await res.json()
      
        this.tasks=this.tasks.map((task)=>task.id===id
        ?{...task, text: data.text}:task )
        
    },


    async addtask(newTask){

        const res = await fetch('http://localhost:5000/tasks', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify(newTask ),})
        const data = await res.json()

        this.tasks=[...this.tasks,data]
    },
    async removetask(id){
      
      const res = await fetch(`http://localhost:5000/tasks/${id}`, {
          method: 'DELETE',
        })
      res.status === 200
      ? (this.tasks = this.tasks.filter((task) => task.id !== id))
      : alert('Error')
    },
    async confirm(id){
      const taskToToggle = await this.fetchTask(id)
      const updTask = { ...taskToToggle, confirm: !taskToToggle.confirm }
      const res = await fetch(`http://localhost:5000/tasks/${id}`, {
        method: 'PUT',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify(updTask),
      })
      const data = await res.json()


      this.tasks = this.tasks.map((task) =>
      task.id === id ? { ...task, confirm: data.confirm } : task
      )
    },

    async fetchTasks() {
      const res = await fetch('http://localhost:5000/tasks')
      const data = await res.json()
      return data
    },
    async fetchTask(id) {
      const res = await fetch(`http://localhost:5000/tasks/${id}`)
      const data = await res.json()
      return data
    },
  },
  props: {
    href: {
      type:String,
      required: true
    }
  },
  data(){
  return{
    newName:"",
    tasks:[]
  }
  },


  async created() {
    this.tasks = await this.fetchTasks()
  },
}

</script>




























<style >
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}
.login{
  display: none;
}
#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400&display=swap');
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
body {
  font-family: 'Poppins', sans-serif;
}
.container {
  max-width: 500px;
  margin: 30px auto;
  overflow: auto;
  min-height: 300px;
  border: 1px solid steelblue;
  padding: 30px;
  border-radius: 5px;
}
.btn {
  display: inline-block;
  background: #000;
  color: #fff;
  border: none;
  padding: 10px 20px;
  margin: 5px;
  border-radius: 5px;
  cursor: pointer;
  text-decoration: none;
  font-size: 15px;
  font-family: inherit;
}
.btn:focus {
  outline: none;
}
.btn:active {
  transform: scale(0.98);
}
.btn-block {
    display: block;
    width: 23%;
    margin: auto;
    padding-bottom: 50p;
    margin-top: 16px;
    margin-bottom: 33px;
}
</style>
