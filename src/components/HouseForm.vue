<template>

    <form @submit.prevent="handleSubmit()" class="row justify-content-end">
        <div class="mb-3 col-3">
            <label for="" class="form-label">Bedrooms</label>
            <input type="text" class="form-control" v-model="editable.bedrooms" name="" id="" aria-describedby="helpId"
                placeholder="">
            <small id="helpId" class="form-text text-muted">{{ editable.bedrooms }}</small>
        </div>

        <div class="mb-3 col-3">
            <label for="" class="form-label">Bathrooms</label>
            <input type="text" class="form-control" v-model="editable.bathrooms" name="" id="" aria-describedby="helpId"
                placeholder="">
            <small id="helpId" class="form-text text-muted">{{ editable.bathrooms }}</small>
        </div>

        <div class="mb-3 col-3">
            <label for="" class="form-label">Sq. Footage</label>
            <input type="number" class="form-control" v-model="editable.sqfootage" name="" id=""
                aria-describedby="helpId" placeholder="">
            <small id="helpId" class="form-text text-muted">Sq. Footage</small>
        </div>

        <div class="mb-3 col-3">
            <label for="" class="form-label">Price</label>
            <input type="number" class="form-control" v-model="editable.price" name="" id="" aria-describedby="helpId"
                placeholder="">
            <small id="helpId" class="form-text text-muted">Price</small>
        </div>

        <div class="mb-3 col-12">
            <label for="" class="form-label">ImgUrl</label>
            <input type="url" class="form-control" v-model="editable.imgUrl" name="" id="" aria-describedby="helpId"
                placeholder="">
            <img :src="editable.imgUrl" class="img-fluid" alt="">
        </div>


        <div class="mb-3 col-4">
            <button class="btn  w-100 rounded-pill selectable text-danger darken-20" type="button"
                @click="editable = {}">Cancel</button>
        </div>
        <div class="mb-3 col-4">
            <button v-if="!homeData.id" class="btn btn-primary w-100 rounded-pill">Create</button>
            <button v-else class="btn btn-success w-100 rounded-pill">Save</button>
        </div>
    </form>
</template>


<script>
import { AppState } from '../AppState';
import { computed, reactive, onMounted } from 'vue';
export default {
    props: { homeData: Object },
    setup(props) {
        return {}
    }
};
</script>


<style lang="scss" scoped>

</style>