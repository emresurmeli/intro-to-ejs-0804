const express = require("express");
const app = express();

const inventory = [
  { name: "Candle", qty: 4 },
  { name: "Cheese", qty: 10 },
  { name: "Phone", qty: 1 },
  { name: "Tent", qty: 0 },
  { name: "Torch", qty: 5 },
];

app.get("/", (req, res) => {
  res.render("home.ejs", {
    msg: "Welcome to the home page!",
    player: {
      name: "friend",
    },
    inventory: inventory,
  });
});

app.get("/:inventoryIndex", (req, res) => {
  const inventoryIndex = req.params.inventoryIndex;
  const item = inventory[inventoryIndex];

  res.render("show.ejs", {
    inventoryItem: item,
  });
});

app.listen(3000, () => {
  console.log("Listening on port 3000");
});
