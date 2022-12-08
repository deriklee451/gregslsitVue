import { AppState } from "../AppState.js"
import { logger } from "../utils/Logger.js"
import { api } from "./AxiosService.js"

class HousesService {

    async getHouses() {
        const res = await api.get('api/houses')
        logger.log('[getHouses]', res.data)
        AppState.houses = res.data
    }

    async createHouse(homeData) {
        const res = await api.post('api/houses', homeData)
        logger.log('[createHouse]', res.data)
        AppState.houses.push(res.data)
    }

}


export const housesService = new HousesService()