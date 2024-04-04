<template>
  <div v-if="product" style="position: relative; top: 100px">
    <v-container class="mb-6">
      <div class="p-2">
        <v-btn @click="$router.back()">
          <v-icon icon="mdi:mdi-arrow-left"></v-icon>
          back</v-btn
        >
      </div>
      <v-card>
        <v-row class="row" no-gutters>
          <v-col xs="12" sm="12" md="7">
            <v-carousel>
              <v-carousel-item
                v-for="(item, i) in product.images"
                :key="i"
                :src="item"
                cover
              >
              </v-carousel-item>
            </v-carousel>
          </v-col>
          <v-col xs="12" sm="12" md="5">
            <v-container>
              <div class="wrapper-right">
                <div>
                  <h1>{{ product.title }}</h1>
                  <v-chip>
                    {{ product.category }}
                  </v-chip>
                  <p>
                    <b>Description:</b> <br />
                    {{ product.description }}
                  </p>
                </div>
                <div>
                  <div><b>Stock</b> {{ product.stock }}</div>
                  <span>Rating </span>
                  <span v-for="n in Math.floor(product.rating)" :key="n">
                    <v-icon color="orange" icon="mdi:mdi-star" />
                  </span>
                  <span v-if="product.rating % 1 !== 0">
                    <v-icon color="orange" icon="mdi:mdi-star-half" />
                  </span>
                  {{ product.rating }}
                  <div class="text-right">
                    <h2>Price {{ formattedAmount(product.price) }}</h2>

                    <div>
                      <v-btn color="blue-darken-4"> Add to cart </v-btn>
                    </div>
                  </div>
                </div>
              </div>
            </v-container>
          </v-col>
        </v-row>
      </v-card>
    </v-container>
  </div>
</template>

<script setup>
import { useRoute } from "vue-router";
import { storeToRefs } from "pinia";
import { useProductStore } from "../../stores/product";
import { currencyFormatter } from "../../composables/currencyFormatter";

const route = useRoute();
const { product, products, loading, error } = storeToRefs(useProductStore());
const { fetchProduct } = useProductStore();

fetchProduct(route.params.id);

const formattedAmount = (price) => {
  return currencyFormatter.format(price);
};
</script>

<style scoped>
* {
  box-sizing: border-box;
}

@media screen and (max-width: 768px) {
  .row {
    flex-direction: column;
  }
}

.title {
  width: 300px;
}

.wrapper-right {
  display: flex;
  flex-direction: column;
  gap: 100px;
}

p {
  color: #000;
  margin-top: 20px;
}
</style>
