import { axiosConfig } from "./axios-config"

export const productApi = {
  getProductsByCategory: async (categoryId: string) => {
    return axiosConfig.get(`product/category/${categoryId}`)
  },

  getProductById: async (productId: string) => {
    return axiosConfig.get(`product/view-one/${productId}`)
  },
  getAllFeaturedProducts: async () => {
    return axiosConfig.get(`product/featured/view`)
  },
}