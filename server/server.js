const express = require('express');
const path = require('path');
const nlg = require("./routes/api/nlg");
const app = express();

// app.use(bodyParser.json());
// app.use('/api/blog', items)
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Credentials", true);
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});

app.use("/api/nlg", nlg);


//Serve static assets if in production
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "build")));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "build", "index.html"));
  });
}
const port = process.env.PORT || 8080;

app.listen(port, () => console.log(`Server started on port ${port}`));