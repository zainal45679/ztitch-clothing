import { axiosConfig } from "./axios-config"

export const productApi = {
    getProductByCategory : async (id : string) => {
        return await axiosConfig.get(`product/view-one/${id}`)
    },
}