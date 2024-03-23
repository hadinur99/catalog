import { defineStore } from "pinia";
import { toRaw } from "vue";

export const useProductStore = defineStore({
  id: "product",
  state: () => ({
    products: [],
    product: null,
    loading: false,
    error: null,
  }),
  getters: {},
  actions: {
    async fetchProducts() {
      this.loading = true;
      try {
        if (this.products.length < 1) {
          const response = await fetch("https://dummyjson.com/products");
          const { products } = await response.json();
          this.products = products;
        }
      } catch (error) {
        this.error = error;
      } finally {
        this.loading = false;
      }
    },

    async fetchProduct(id) {
      const idNumber = parseInt(id);
      const parseProxyArray = toRaw(this.products);

      const existingProduct = parseProxyArray.find(
        (item) => item.id === idNumber
      );

      if (existingProduct) {
        // If the product exists in the local array, set it as the current product
        this.product = existingProduct;
        this.loading = false; // Set loading to false as no API call is needed
      } else {
        try {
          const response = await fetch(`https://dummyjson.com/products/${id}`);
          this.product = await response.json();
        } catch (error) {
          alert(error);
          this.error = error;
        } finally {
          this.loading = false;
        }
      }
    },
  },
});
