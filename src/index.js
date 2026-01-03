import dotenv from "dotenv";
import app from "./app.js";

dotenv.config({
  path: "./.env",
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
console.log(process.env.MY_VARIABLE);
console.log("Server is runing");
