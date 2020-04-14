const express = require("express");
const router = express.Router();
const MongoUtils = require("../db/MongoUtils.js");
var fetch = require("node-fetch");
const mu = MongoUtils();

/* GET home page. */
router.get("/", function (req, res) {
  res.render("index", { user: req.user });
});

const parseAddress = (address) => {
  // Aquí al igual que en otras partes del proyecto tienen codigo comentado, sería buena idea quitarlo

  console.log("new address", address);
  return address;
};

const getLocation = (address) => {
  let key = "";
  let direccion =
    "https://maps.googleapis.com/maps/api/geocode/json?address=" +
    address +
    "&key=" +
    key;
  return fetch(direccion, {
    method: "POST", // or 'PUT'
    body: {}, // data can be `string` or {object}!
  }).then((res) => res.json());
};

router.post("/addStore", function (req, res) {
  let body = req.body;
  const newAddress = parseAddress(body.address);
  const processData = () => {
    getLocation(newAddress)
      .then((address) => {
        body.position = address.results[0].geometry.location;
      })
      .catch((err) => console.log(err));
    body.rating = 5;
    body.nRatings = 1;
    body.comments = [];

    mu.insertBusiness(body)
      .then((doc) => {
        res.redirect("/");
      })
      .catch((err) => console.log(err));
  };
  processData();
});

// Data endpoint: retorna un archivo json
router.get("/getRestaurants", function (req, res) {
  //Client side rendering
  mu.connect()
    .then(mu.getRestaurants)
    //for Front side rendering send the html instead of the json file
    .then((restaurants) => res.json(restaurants))
    .catch((err) => console.log(err));
});

router.get("/shop/:id", (req, res) => {
  const id = req.params.id;
  mu.connect()
    .then((client) => mu.getShop(client, id))
    .then((user) => res.json(user))
    .catch((err) => console.log(err));
});

router.get("/usuarios/:id", (req, res) => {
  const id = req.params.id;
  mu.connect()
    .then((client) => mu.getUser(client, id))
    .then((user) => res.json(user))
    .catch((err) => console.log(err));
});

router.get("/getUsers", function (req, res) {
  //Client side rendering
  mu.connect()
    .then((client) => mu.getUsers(client, (users) => res.json(users), true))
    //for Front side rendering send the html instead of the json file
    .catch((err) => console.log(err));
});
router.post("/user", function (req, res) {
  let body = req.body;
  //Client side rendering
  mu.connect()
    .then((client) => mu.addUser(client, body, (user) => res.json(user)))
    //for Front side rendering send the html instead of the json file
    .catch((err) => console.log(err));
});

router.post("/restaurant", function (req, res) {
  let body = req.body;
  //Client side rendering
  mu.connect()
    .then((client) =>
      mu.addRestaurant(client, body, (restaurant) => res.json(restaurant))
    )
    //for Front side rendering send the html instead of the json file
    .catch((err) => console.log(err));
});
router.put("/store/:id", function (req, res) {
  var body = req.body;
  const id = req.params.id;

  mu.connect()
    .then((client) => mu.updateShop(client, body, id, (shop) => res.json(shop)))
    .catch((err) => console.log(err));
});
module.exports = router;
