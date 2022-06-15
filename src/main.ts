import { createApp } from 'vue';
import App from './App.vue';
import { store, key } from "./store";
import router from './router'
import './styles/index.scss';
import 'element-plus/dist/index.css';
import i18n from './lang';

const app = createApp(App);

app.use(store, key);
app.use(router)
app.use(i18n);

app.mount('#app');