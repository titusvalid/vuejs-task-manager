<template>
  <form @submit="onSubmit" class="add-form">
    <div class="form-control">
      <h1>Promemoria</h1>
      <input type="text" v-model="text" name="text" placeholder="Aggiungi il nuovo task" />
    </div>
    <div class="form-control">
      <h1>Data</h1>
      <input
        type="date"
        v-model="day"
        name="day"
        placeholder="Data"
      />
    </div>


    <input type="submit" value="Conferma" class="btn btn-block" />
  </form>
</template>

<script>
export default {
  name: 'AddTask',
  data() {
    return {
      text: '',
      day: '',
      confirm: false,
      newName:""
    }
  },


  
  methods: {
    onSubmit(e) {

        e.preventDefault()
        const newTask = {
            text: this.text,
            day: this.day,
            
      }
      
      this.$emit('addtask', newTask)
      
    },
  },
}
</script>















<style scoped>
.add-form {
  margin-bottom: 140px;
}
.form-control {
  margin: 20px 0;
}
.form-control label {
  display: block;
}
.form-control input {
  width: 100%;
  height: 40px;
  margin: 5px;
  padding: 3px 7px;
  font-size: 17px;
}
.form-control-check {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.form-control-check label {
  flex: 1;
}
.form-control-check input {
  flex: 2;
  height: 20px;
}
</style>
