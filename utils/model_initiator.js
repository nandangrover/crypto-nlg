// const { Console } = require("console");
let { PythonShell } = require("python-shell");

module.exports = function startParaphrasing(result, res, data_format) {
  console.log("Starting paraphrasing...");
  // console.log("Result: ", result);

  let regex = /(<([^>]+)>)/gi;

  const parsedResult = result.replace(regex, "");

  const summary = parsedResult.substring(
    parsedResult.indexOf("Summary&nbsp;") + 13,
    parsedResult.lastIndexOf("Sentiment Analysis&nbsp;")
  );

  const sentiment = parsedResult.substring(
    parsedResult.indexOf("Sentiment Analysis&nbsp;") + 24,
    parsedResult.lastIndexOf("Technical Analysis&nbsp;")
  );

  const technical = parsedResult.substring(
    parsedResult.indexOf("Technical Analysis&nbsp;") + 24,
    parsedResult.lastIndexOf("Recommendation&nbsp;")
  );

  const recommendation = parsedResult.split('Recommendation&nbsp;')[1];

  // console.log("Result: ", summary, sentiment, technical, recommendation);

  let spawn = require("child_process").spawn;
  let process = spawn("python3", ["./model.py"]);

  PythonShell.run("utils/model.py", { args: [summary, sentiment, technical, recommendation] }, function (err, data) {
    if (err) console.log(err);
    const parsedData = JSON.parse(data.toString());
    // console.log(parsedData);
    data_format.nlg = parsedData;
    res.json(data_format);
  });

  // process.stdout.on('data', function (data) {
  //  console.log(data.toString(), "data from python");
  //  res.json(data);
  // });
};
