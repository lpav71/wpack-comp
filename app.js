import * as bootstrap from 'bootstrap';
window.bootstrap = bootstrap;
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "/css/styles.css";


import { createApp } from 'vue';

const app1 = createApp({});

import HelloComponent from "./vueComponents/Hello.vue";
app1.component('hello', HelloComponent);
import AboutComponent from "./vueComponents/About.vue";
app1.component('about', AboutComponent);

app1.mount('#app1');

const app2 = createApp({});
import Test from "./vueComponents/TestComposition.vue";
app2.component('test', Test);

app2.mount('#app2');
