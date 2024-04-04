// import this after install `@mdi/font` package
import "@mdi/font/css/materialdesignicons.css";

import "vuetify/styles";
import { createVuetify } from "vuetify";
import { aliases, fa } from "vuetify/iconsets/fa";
import { mdi } from "vuetify/iconsets/mdi";

export default defineNuxtPlugin((app) => {
  const vuetify = createVuetify({
    // ... your configuration
  });
  app.vueApp.use(vuetify);
});
