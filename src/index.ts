import "./style/main.less";
import { createApp } from "vue";
import App from "./App.vue";

async function main() {
  createApp(App).mount(document.body);
  console.log("script start");
}

main().catch((e) => {
  console.log(e);
});
