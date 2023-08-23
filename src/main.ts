import { createApp } from 'vue'
import './styles.css';
import App from './App.vue'
import PrimeVue from 'primevue/config';
import router from "./router";

import "./assets/tailwind.css";
import 'primevue/resources/themes/bootstrap4-dark-blue/theme.css'
import 'primevue/resources/primevue.min.css'
import 'primeicons/primeicons.css'
import Card from 'primevue/card';
import Accordion from 'primevue/accordion';
import AccordionTab from 'primevue/accordiontab';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import Rating from 'primevue/rating';

const app = createApp(App);

app.use(PrimeVue);
app.use(router);
app.component('Card', Card);
app.component('Accordion', Accordion);
app.component('AccordionTab', AccordionTab);
app.component('DataTable', DataTable);
app.component('Column', Column);
app.component('Rating', Rating);

app.mount('#app');

