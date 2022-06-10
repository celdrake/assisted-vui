import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { plugin, defaultConfig } from '@formkit/vue'

import '@patternfly/patternfly/patternfly.css';
import VuePatternfly4 from '@vue-patternfly/core';

const app = createApp(App);

// Define the plugins
app.use(VuePatternfly4);
app.use(router)
app.use(plugin, defaultConfig)


app.mount('#app')

