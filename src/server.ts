import app from "./app"
// getting-started.js
import mongoose from "mongoose";
import config from "./app/config";

async function main() {
    // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
  await mongoose.connect(config.database_url as string);

  app.listen(config.port, () => {
    console.log(`Example app listening on port ${config.port}`)
  })
}
