const app = require("./src/app");
const envConfig = require("./src/configs/config.mongodb");
const { config } = require("dotenv");
config();
const PORT = process.env.PORT || 4001;

const server = app.listen(PORT, () => {
  console.log(`WSV eCommerce start with port ${PORT}`);
});

// process.on("SIGINT", () => {
//   server.close(() => console.log(`Exit Server Express`));
// });
