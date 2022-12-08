<template>
    <div class="card text-center elevation-2 selectable" @click="goTo">
        <img class="img-fluid rounded square-bottom" :src="car.imgUrl" alt="">
        <h5>{{ }} | {{ }} | {{ }}</h5>
        <h5>${{ car.price }}</h5>
        <div class="p-2 text-start">{{ house.imgUrl }}</div>
        <button v-if="(house.creatorId == account.id)" @click="removeCar(car.id)"
            class="btn btn-danger delete-btn rounded-pill"><i class="  px-2 mdi mdi-delete-forever"></i></button>
        <div v-if="car.creator" class="creator text-end p-1">
            <img :src="car.creator.picture" alt="">
            <span>{{ car.creator.name }}</span>
        </div>
    </div>
</template>


<script>
import { AppState } from '../AppState';
import { computed, reactive, onMounted } from 'vue';
export default {
    props: { house: Object },
    setup(props) {
        return {}
    }
};
</script>


<style lang="scss" scoped>

</style>