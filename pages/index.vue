<template>
  <div>
    <h1 class="text-center">Products Catalog</h1>
    <div v-if="products" class="list-card-of-product">
      <nuxt-link
        v-for="product in products"
        :key="product.id"
        :to="'/product/' + product.id"
      >
        <div class="product-card">
          <img
            :src="product.thumbnail"
            :alt="product.brand"
            class="product-image"
            :width="100"
          />
          <div class="product-title">{{ product.title }}</div>
          <div class="product-rating">Rating {{ product.rating }}</div>
          <div class="product-price">Price ${{ product.price }}</div>
        </div>
      </nuxt-link>
    </div>
  </div>
</template>

<script setup>
import { storeToRefs } from "pinia";
import { useProductStore } from "../stores/product";

const { products, loading, error } = storeToRefs(useProductStore());
const { fetchProducts } = useProductStore();

fetchProducts();
</script>

<style lang="scss" scoped>
h2 {
  margin-bottom: 20px;
  font-size: 30px;
}

p {
  margin: 20px 0;
}

.img {
  width: 100px;
  height: 100px; /* You can adjust the height as needed */
  object-fit: cover;
}
</style>
