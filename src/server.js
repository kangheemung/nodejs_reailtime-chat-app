const express = require("express");

const app = express();
const PORT = 3001;
const http = require("http");

/* Create an endpoint */
app.get("/", (req, res) => {
  res.render("<h1>Hello express</h1>");
});
app.post("/", (req,res )=>{
 console.log(req.files);
})
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
