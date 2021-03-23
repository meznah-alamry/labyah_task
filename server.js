require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;
const mongoose = require("mongoose");

mongoose.connect(
  process.env.MongoDB,
  { useNewUrlParser: true, useUnifiedTopology: true , useFindAndModify :true },
  () => {
    console.log("mongoDB is connected");
  }
);

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//routes
app.use("/api/appointments", require("./routes/appointments"));

app.listen(PORT, () => console.log(`server running in ${PORT}`));