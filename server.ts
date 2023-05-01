import { createSSRApp, render } from "vue";
import { renderToString } from "vue/server-renderer";
import express from "express";
import 'dotenv/config';
import AppVue from "./src/App.vue";

const server = express();

server.get("/", async (req, res) => {
  const app = createSSRApp(AppVue, {
    data: () => ({ count: 1 }),
  });

  const html = await renderToString(app);
  res.end(html);
  
});

const port = process.env.PORT || 3000;
server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`)
})