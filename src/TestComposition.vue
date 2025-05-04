<template>
  <div>
    <h1 :style="{'background-color': 'yellow', height: '60px', width: '370px'}">{{ title }}</h1>
    <ul class="border rounded" style="width: 500px; margin: auto;">
      <li class="red" :style="styleObj" v-for="item in newArray" :key="item" @click="addItem">{{ item }}</li>
    </ul>
  </div>
</template>

<script setup>
import { ref, toRefs, onMounted, computed, watch } from 'vue';

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  items: {
    type: Array,
    required: true,
  },
});

const { title, items } = toRefs(props);

// Создание реактивной переменной
const newItem = ref(100); // Инициализация пустой строки
const newArray = ref([1, 2, 3]); // Инициализация пустого массива

const addItem = () => {
  if (newItem.value) {
    newArray.value.push(newItem.value); // Добавление нового элемента в список
    newItem.value = 1; // Сброс значения
  }
};

const styleObj = computed(() => {
  return {
    'background-color': '#ccccf5',
    height: '30px',
    width: '100px'
  };
});

// Наблюдение за изменениями в newArray
watch(newArray, (newValue) => {
  console.log('Массив изменился:', newValue);
}, { deep: true }); // Добавлено deep: true для отслеживания вложенных изменений

// Хук mounted
onMounted(() => {
  console.log('Компонент успешно смонтирован.', 'item = ', items.value);
});

</script>

<style scoped>
.red {
  color: red;
}
</style>
