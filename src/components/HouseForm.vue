<template>

    <form @submit.prevent="handleSubmit()" class="row justify-content-end">
        <div class="mb-3 col-3">
            <label for="" class="form-label">Bedrooms</label>
            <input type="number" class="form-control" v-model="editable.bedrooms" name="bedrooms" id="bedrooms"
                aria-describedby="helpId" placeholder="">
            <small id="helpId" class="form-text text-muted">{{ editable.bedrooms }}</small>
        </div>

        <div class="mb-3 col-3">
            <label for="" class="form-label">Bathrooms</label>
            <input type="number" class="form-control" v-model="editable.bathrooms" name="bathrooms" id="bathrooms"
                aria-describedby="helpId" placeholder="">
            <small id="helpId" class="form-text text-muted">{{ editable.bathrooms }}</small>
        </div>

        <!-- <div class="mb-3 col-3">
            <label for="" class="form-label">Sq. Footage</label>
            <input type="number" class="form-control" v-model="editable.sqfootage" name="" id=""
                aria-describedby="helpId" placeholder="">
            <small id="helpId" class="form-text text-muted">Sq. Footage</small>
        </div> -->

        <div class="mb-3 col-3">
            <label for="" class="form-label">Price</label>
            <input type="number" class="form-control" v-model="editable.price" name="price" id="price"
                aria-describedby="helpId" placeholder="">
            <small id="helpId" class="form-text text-muted">Price</small>
        </div>

        <div class="mb-3 col-12">
            <label for="" class="form-label">ImgUrl</label>
            <input type="url" class="form-control" v-model="editable.imgUrl" name="imgUrl" id="imgUrl"
                aria-describedby="helpId" placeholder="image">
            <img :src="editable.imgUrl" class="img-fluid" alt="">
        </div>


        <div class="mb-3 col-4">
            <button class="btn  w-100 rounded-pill selectable text-danger darken-20" type="button"
                @click="editable = {}">Cancel</button>
        </div>
        <div class="mb-3 col-4">
            <button class="btn btn-primary w-100 rounded-pill">Create</button>
            <!-- <button v-else class="btn btn-success w-100 rounded-pill">Save</button> -->
        </div>
    </form>
</template>


<script>
import { AppState } from '../AppState';
import { computed, reactive, onMounted, ref } from 'vue';
import { housesService } from '../services/HouseService.js'
import Pop from '../utils/Pop.js';
import { logger } from '../utils/Logger.js';
export default {
    props: { homeData: { type: Object, default: {} } },
    setup(props) {
        onMounted(() => {
            editable.value = props.homeData
        })
        const editable = ref({})
        async function createHouse() {
            try {
                await housesService.createHouse(editable.value)
                editable.value = {}
                Pop.toast('created House', 'success')
            } catch (error) {
                Pop.error(error)
                logger.error(error)
            }
        }

        return {
            editable,
            async handleSubmit() {
                await createHouse()
            }
        }


    }
};
</script>


<style lang="scss" scoped>

</style>