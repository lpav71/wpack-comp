<script setup>
import { ref, toRefs, onMounted, defineProps } from 'vue';  //Здесь убедитесь, что вы импортируете все необходимые функции

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
const newItem = ref('w'); // Инициализация пустой строки
const newArray = ref([1,2,3]); // Инициализация пустого массива

const addItem = () => {
  console.log(items.value);
  if (newItem.value) {
    newArray.value.push(newItem.value); // Добавление нового элемента в список
    console.log(newItem.value);
    newItem.value = 'r'; // Сброс значения
  }
};

// Хук mounted
onMounted(() => {
  console.log('Компонент успешно смонтирован.');
  // Здесь можно выполнять дополнительные действия, например, получить данные с сервера
});

</script>

<template>
  <div>
    <h1>{{ title }}</h1>
    <ul class="border rounded" style="width: 500px;margin: auto">
      <li v-for="item in newArray" :key="item" @click="addItem()">{{ item }}</li>
    </ul>
  </div>
</template>

<style scoped>

</style>