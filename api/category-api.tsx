import { axiosConfig } from "./axios-config"

export const categoryApi = {
    getAllCategory : async() => {
        const response = await axiosConfig.get("category/view")
        return response.data
    }
}