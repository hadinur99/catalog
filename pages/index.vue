<template>
  <div>
    <h1 class="text-center">Products Catalog</h1>
    <div v-if="products" class="list-card-of-product">
      <nuxt-link
        class="underline-none"
        v-for="product in products"
        :key="product.id"
        :to="'/product/' + product.id"
      >
        <v-card class="product-card" max-width="344">
          <v-img
            :src="product.thumbnail"
            :alt="product.brand"
            class="product-image"
            cover
          ></v-img>

          <v-card-title> {{ product.title }} </v-card-title>

          <v-card-subtitle>
            <span v-for="n in Math.floor(product.rating)" :key="n">
              <v-icon color="orange" icon="mdi:mdi-star" />
            </span>
            <span v-if="product.rating % 1 !== 0">
              <v-icon color="orange" icon="mdi:mdi-star-half" />
            </span>
            {{ product.rating }}
          </v-card-subtitle>

          <v-card-subtitle style="text-align: right">
            Price {{ formattedAmount(product.price) }}
          </v-card-subtitle>
        </v-card>
      </nuxt-link>
    </div>
  </div>
</template>

<script setup>
import { storeToRefs } from "pinia";
import { useProductStore } from "../stores/product";
import { currencyFormatter } from "../composables/currencyFormatter";

const { products, loading, error } = storeToRefs(useProductStore());
const { fetchProducts } = useProductStore();

fetchProducts();

const formattedAmount = (price) => {
  return currencyFormatter.format(price);
};
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

.underline-none {
  text-decoration: none;
}
</style>
