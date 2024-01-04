const mongoose = require("mongoose");

const dbConnect = () => {
  mongoose
    .connect("mongodb://localhost:27017/graph1", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log("db connection successful"))
    .catch((err) => console.error(err.message));
};

module.exports = { dbConnect };
