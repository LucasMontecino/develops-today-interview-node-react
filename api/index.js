const app = require("./src/app.js");
require("dotenv").config();
const { PORT } = process.env;
const port = PORT;

app.listen(port, () => {
  console.log(`Server listening at ${port}`);
});
