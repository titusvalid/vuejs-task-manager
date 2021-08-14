<template>
<Master/>
  <div class="flex-center">
    COMPLETED
  </div>
  <div >
  <App/>
  </div>
</template>

<script>
import Master from './Master.vue'
import App from "../App.vue"
export default {
  components: {
    Master,
    App,
  }
}


</script>


<style >
.add-form{
  display: none;
}

.tasks{
  display: none;
}
.tasks.confirm {
  display: list-item;
}
.login{
  display: none;
}

</style>


