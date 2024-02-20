const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("this is testing file");
});

app.get("/api/jokes", (req, res) => {
  const jokes = [
    {
      id: 1,
      title: "A joke",
      content: "this is a first joke",
    },
    {
      id: 2,
      title: "A joke",
      content: "this is a Second joke",
    },
    {
      id: 3,
      title: "A joke",
      content: "this is a third joke",
    },
    {
      id: 4,
      title: "A joke",
      content: "this is a fourth joke",
    },
    {
      id: 5,
      title: "A joke",
      content: "this is a Fifth joke",
    },
  ];
  res.send(jokes);
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Serve at  the port http://localhost:${port}`);
});
