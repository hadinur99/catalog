<template>
  <div v-if="product">
    <div class="wrapper">
      <div class="outer">
        <div class="content animated fadeInLeft">
          <h1 class="title">
            {{ product.title }}
          </h1>
          <p>
            {{ product.description }}
          </p>

          <div class="button">
            <a>$ {{ product.price }}</a
            ><a class="cart-btn"
              ><i class="cart-icon ion-bag"></i>ADD TO CART</a
            >
          </div>
        </div>
        <div class="slider">
          <img
            :src="product.thumbnail"
            :width="300"
            class="animated fadeInRight"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRoute } from "vue-router";
import { storeToRefs } from "pinia";
import { useProductStore } from "../../stores/product";

const route = useRoute();
const { product, products, loading, error } = storeToRefs(useProductStore());
const { fetchProduct } = useProductStore();

fetchProduct(route.params.id);
</script>

<style scoped>
* {
  box-sizing: border-box;
}

.title {
  width: 300px;
}

.wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: Montserrat;
  /* background: #bbb; */
  width: 100%;
  height: 100vh;
}

.outer {
  position: relative;
  background: #fff;
  height: 450px;
  width: 650px;
  overflow: hidden;
  display: flex;
  align-items: center;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
    rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
}

img {
  position: absolute;
  top: 0px;
  right: -20px;
  z-index: 0;
  animation-delay: 0.5s;
}

.content {
  animation-delay: 0.3s;
  position: absolute;
  left: 20px;
  z-index: 3;
}

h1 {
  color: #111;
}

p {
  width: 280px;
  font-size: 13px;
  line-height: 1.4;
  color: #aaa;
  margin: 20px 0;
}

.bg {
  display: inline-block;
  color: #fff;
  background: cornflowerblue;
  padding: 5px 10px;
  border-radius: 50px;
  font-size: 0.7em;
}
.button {
  width: fit-content;
  height: fit-content;
  margin-top: 10px;
}

.button a {
  display: inline-block;
  overflow: hidden;
  position: relative;
  font-size: 11px;
  color: #111;
  text-decoration: none;
  padding: 10px 15px;
  border: 1px solid #aaa;
  font-weight: bold;
}

.button a:after {
  content: "";
  position: absolute;
  top: 0;
  right: -10px;
  width: 0%;
  background: #111;
  height: 100%;
  z-index: -1;
  transition: width 0.3s ease-in-out;
  transform: skew(-25deg);
  transform-origin: right;
}

.button a:hover:after {
  width: 150%;
  left: -10px;
  transform-origin: left;
}

.button a:hover {
  color: #fff;
  transition: all 0.5s ease;
}

.button a:nth-of-type(1) {
  border-radius: 50px 0 0 50px;
  border-right: none;
}

.button a:nth-of-type(2) {
  border-radius: 0px 50px 50px 0;
}

.cart-icon {
  padding-right: 8px;
}

.footer {
  position: absolute;
  bottom: 0;
  right: 0;
}
</style>
