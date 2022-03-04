// const { Console } = require("console");
let {PythonShell} = require('python-shell')

module.exports = function startParaphrasing(result, res) {

  console.log("Starting paraphrasing...");
  var spawn = require("child_process").spawn;
  var process = spawn('python3', ["./model.py"]);

  PythonShell.run("utils/model.py", {args: [result]}, function (err, data) {
    if (err) console.log(err);
    console.log(data);
    res.json(data);
  });

  process.stdout.on('data', function (data) {
   console.log(data.toString(), "data from python"); 
   res.json(data);
  });
};
