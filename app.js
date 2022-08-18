import express from "express";
import cors from "cors";
import 'dotenv/config';
import jwt from "jsonwebtoken";
import fetch from "node-fetch";
const app = express();
const PORT = process.env.PORT;


app.use(express.json());
app.use(cors());



// login/ register

app.post("/register", async (req, res) => {
  await fetch("http://localhost:8080/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(req.body),
  });
  res.json();
});


app.post("/login", async (req, res) => {
  const data = await fetch(`http://localhost:8080/users/`).then((data) =>
    data.json()
  );
  const user = data.filter((item) => item.username === req.body.username);
  if (user[0].password === req.body.password) {
    const token = jwt.sign(
      { id: user[0].id, username: user[0].username },
      process.env.SECRET
      );
      res.json({
        id: user[0].id,
        username: user[0].username,
        token,
      });
    } else {
      res.json({ err: "invalid username or password" });
  }
});

app.get("/verifyToken", async (req, res) => {
  const verify = await isLoggedIn(req);
  res.json({
    verify: verify,
    username: req.token?.username,
    id: req.token?.id,
  });
});


// add user
app.post('/addUsers', async (req, res) => {
const user = {
  photo: req.body.photo,
  username: req.body.username
} 
await fetch('http://localhost:8080/addUsers', {
  method: 'post',
  headers: {
      'Content-type': 'application/json'
  },
  body: JSON.stringify(user)
});
  res.json()
});














