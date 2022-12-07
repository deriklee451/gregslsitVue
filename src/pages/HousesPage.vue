<template>
  <div class="container-fluid">
    <h1 class="text-center text-primary"> Houses</h1>
    <div class="row justify-content-center">
      <div class="col-8 bg-white p-3 elevation-1 rounded">
        <!-- <HouseForm /> -->
      </div>
    </div>

    <div class="row">

      <div v-for="h in houses" class="col-md-4 p-4">
        <HouseCard :house="h" />
      </div>

    </div>
  </div>
</template>


<script>
import { AppState } from '../AppState';
import { computed, reactive, onMounted } from 'vue';
import HouseForm from '../components/HouseForm.vue.js';
  rt defau lt {
   tup() {
    rn {};
  
  components: { HouseForm }
};
</script>


<style lang="scss" scoped>

</style>
