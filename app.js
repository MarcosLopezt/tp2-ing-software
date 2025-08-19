const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Hola desde mi app containerizada 🚀");
});

app.get("/health", (req, res) => {
  res.json({ status: "ok", env: process.env.NODE_ENV || "dev" });
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});
