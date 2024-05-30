// controller.js
const { ObjectId } = require("bson");
const db = require("../../config/mongodb");

// INDEX
const index = (req, res) => {
  db.collection("products")
    .find()
    .toArray()
    .then((result) => res.send(result))
    .catch((error) => res.send(error));
};

// VIEW
const view = (req, res) => {
  const { id } = req.params;

  db.collection("products")
    .findOne({ _id: new ObjectId(id) })
    .then((result) => res.send(result))
    .catch((error) => res.send(error));
};

module.exports = {
  index,
  view,
};
