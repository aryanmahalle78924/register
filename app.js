// const express = require("express");
// const bodyParser = require("body-parser");
// const mongoose = require("mongoose");
// const app = express();

// let port = process.env.PORT || 3000

// app.use(bodyParser.json());
// app.use(express.static("public"));
// app.use(bodyParser.urlencoded({ extended: true }));

// mongoose.connect(
//   "mongodb+srv://Atharva:Amahalle123@cluster0.xftkbwv.mongodb.net/registerrr?retryWrites=true&w=majority",
//   {
//     useNewUrlParser: true,
//   }
// );

// const db = mongoose.connection;

// db.on("error", () => console.log("Error in connecting to db"));
// db.once("open", () => console.log("connected to the database"));

// app.post("/sign_up", (req, res) => {
//   let name = req.body.name;
//   let mobile = req.body.mobile;
//   let year = req.body.year;
//   let sec = req.body.sec;
//   let event = req.body.event;
//   let lang = req.body.lang;
//   let registeredName = req.body.registeredName;

//   let data = {
//     name: name,
//     mobile: mobile,
//     year: year,
//     sec: sec,
//     event: event,
//     lang: lang,
//     registeredName: registeredName,
//   };
//   db.collection("registe").insertOne(data, (err, collection) => {
//     if (err) {
//       throw err;
//     }
//     console.log("Reecord entered successfully");
//   });
//   return res.redirect("signup_success.html");
// });

// app
//   .get("/", (req, res) => {
//     res.set({
//       "Allow-access-Allow-Origin": "*",
//     });
//     return res.redirect("index.html");
//   })
//   .listen(port);
// console.log("Listening on the port 3000");

