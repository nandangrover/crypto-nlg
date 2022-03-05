const express = require("express");
const axios = require("axios");
const router = express.Router();
const fs = require("fs");
const model_init = require("../../utils/model_initiator");
// const { stripHtml } = require("string-strip-html");
// const btc = require("../../config/btc.json");
router.get("/", (req, res) => {
  let merged = [];
  fs.readdir("config", (err, files) => {
    files.forEach((file) => {
      if (file.includes(".json") && !file.includes("main.json")) {
        let coin_data = JSON.parse(fs.readFileSync(`config/${file}`, "utf8"))[
          "coinInfo"
        ];
        merged.push(coin_data);
      }
    });
    res.json(merged);
  });
});

router.get("/:coin", (req, res) => {
  res.setTimeout(0);
  // const fs = require('fs');

  const coin_data = JSON.parse(
    fs.readFileSync(`config/${req.params.coin}.json`, "utf8")
  );
  let main = JSON.parse(fs.readFileSync("config/main.json", "utf8"));
  main.data[0].jsonData = coin_data;

  const options = {
    method: "POST",
    url: "https://app.studio.arria.com:443/alite_content_generation_webapp/text/bwjpLqodkLv",
    headers: {
      "content-type": "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzUxMiJ9.eyJqdGkiOiJhbF90ekdLVTFDQndMaHNPdk9qQmRBd1EiLCJpYXQiOjE2NDYwNTA4ODcsImV4cCI6MTgwMzczMDg4NywiaXNzIjoiQUxpdGUiLCJzdWIiOiJ4MEFjNXZWMXh0X3QiLCJBTGl0ZS5wZXJtIjpbInByczp4OmJ3anBMcW9ka0x2Il0sIkFMaXRlLnR0IjoidV9hIn0.DPICDsWnGGC53ypXn30_2NKIjyFunyjy4XKdNpRUWRD24FLhcTkMi1EOxzfBCIzexQCIasMhFtPqMA2zSaqiQQ",
    },
    data: main,
  };

  axios
    .request(options)
    .then(function (response) {
      const { result } = response.data[0];

      const data = {
        nlg: {
          summary: '',
          sentiment: '',
          technical: '',
          recommendation: '',
        },
        lang: "en",
        json: coin_data,
      };
      model_init(result, res, data);
    })
    .catch(function (error) {
      console.error(error);
      res.status(500).json(error);
    });
});
module.exports = router;
