<template>
<Master/>
  <div class="login">
   <h1>Login</h1>
        <form @submit="onSubmit()" onsubmit="return false" > 
            <input type="text"  v-model="name" name="text" placeholder="Inserisci il nome" />
            
        </form>
  </div>
</template>

<script>
import Master from './Master.vue';

export default {
    name:"Login",
  components: {
    Master
  },
    data() {
    return {
      name: "",

    }
  },

  methods: {
//      onSubmit () {
//        console.log("in",this.name)
//        this.$store.commit('setName', this.name)
//  }

  } 



}  

</script>


<style >
.login{
  display: block;
}
.btn-block {
  display: inline-block;
  width: 20%;
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
</style>