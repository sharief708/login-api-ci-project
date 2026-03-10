const express = require("express");
const app = express();

app.use(express.json());

const users = [
  { email: "admin@test.com", password: "123456" }
];

app.post("/login", (req, res) => {

  const { email, password } = req.body;

  const user = users.find(
    u => u.email === email && u.password === password
  );

  if (!user) {
    return res.status(401).json({ message: "Invalid credentials" });
  }

  res.json({ message: "Login successfully Completed" });

});

module.exports = app;