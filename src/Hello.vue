<template>
  <h2 @click="clk">{{ message }}</h2>
</template>

<script setup>
import { ref } from 'vue';

const message = ref("!!! Hello Vue 3 !!!");

const clk = () => {
  alert('Hello');
};
</script>

<style scoped>
h2 {
  cursor: pointer;
}
</style>
