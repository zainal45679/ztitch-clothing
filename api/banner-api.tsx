import { axiosConfig } from "./axios-config"

export const bannerApi = {
    getAllBanner: async () => {
        const response = await axiosConfig.get("banner/view")
        return response.data
    },
}
