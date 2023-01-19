const express = require("express");
const mongoose = require("mongoose");
const app = express();
//enable cors
const cors = require("cors");
const authRouter = require("./authentication/auth.js")
app.use(cors());
app.use(express.json());
const port = 3000;
const Book = require("./materials/models/bookmodel.js");

mongoose.set("strictQuery", true);

async function connectDB() {
  try {
    // Connect to the MongoDB cluster
    await mongoose.connect(
      "mongodb+srv://database:4Ua2gXCusYmRuOo8@pahilo.bhu3xle.mongodb.net/thukka?retryWrites=true&w=majority"
    );
    console.log("Connected to MongoDB");
  } catch (e) {
    console.log("Could Not Connect");
  }
}

app.get("/", async (req, res) => {
  const data = await Book.find();
  res.send(data);
});

app.get("/search/byname/:name", async (req, res) => {
  const data = await Book.find({ name: req.params.name });
  console.log(data);
  res.send(data);
});

app.get("/search/byauthor/:name", async (req, res) => {
  const data = await Book.find({ name: req.params.author });
  console.log(data);
  res.send(data);
});

app.post("/send", (req, res) => {
  const data = req.body;
  console.log(data);
  if (data) {
    Book.create(data, function (err, small) {
      if (err) return console.log(err);
      console.log("DONE");
    });
  }
});

app.delete("/delete/:id", (req, res) => {
  Book.findOneAndDelete({ _id: req.params.id }, function (err, doc) {
    if (!doc) return console.log("DOESNT EXITST");
    else if (doc) return res.send(200);
  });
});
app.patch("/:id", (req, res) => {
  const data = req.body;
  if (data) {
    Book.updateOne({ _id: req.params.id },data, function (err) {
      if (err) return console.log(err);
      console.log("UPDATED");
    });
  }
  // Book.findOne({_id:req.params.id}, function (err,book) {
  //   for (var field in Book.schema.paths) {
  //     if ((field !== '_id') && (field !== '__v')) {
  //        if (req.body[field] !== undefined) {
  //           book[field] = req.body[field];
  //        }
  //     }
  //   }
  // })
  //console.log(Book.schema.paths)
});

connectDB();

app.use('/auth', authRouter);

app.listen(port, () =>
  console.log(`App listening at http://localhost:${port}`)
); 