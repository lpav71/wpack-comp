import * as bootstrap from 'bootstrap';
window.bootstrap = bootstrap;
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "/css/styles.css";


import { createApp } from 'vue';

const app = createApp({});

import HelloComponent from "./vueComponents/Hello.vue";
app.component('hello', HelloComponent);
import AboutComponent from "./vueComponents/About.vue";
app.component('about', AboutComponent);
import Test from "./vueComponents/TestComposition.vue";
app.component('test', Test);

app.mount('#app');

