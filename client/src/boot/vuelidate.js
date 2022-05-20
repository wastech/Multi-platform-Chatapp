import { boot } from "quasar/wrappers";
import vuelidate from "vuelidate";

export default boot(({ app }) => {
  app.use(vuelidate);
});
