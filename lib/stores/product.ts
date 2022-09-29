import {defineStore} from "pinia";

import Product from "@/lib/entities/Product";

export const useProductStore = defineStore({
  id: 'productStore',
  state: () => {
    return {
      items: [] as Product[],
      item: {} as Product,
    }
  },
});
