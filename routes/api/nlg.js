const express = require("express");
const axios = require("axios");
const router = express.Router();
const fs = require("fs");
const model_init = require("../../utils/model_initiator");
// const { stripHtml } = require("string-strip-html");
// const btc = require("../../config/btc.json");

router.get("/:coin", (req, res) => {
  // const fs = require('fs');

  const coin_data = JSON.parse(fs.readFileSync(`config/${req.params.coin}.json`, "utf8"));
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

      // const options2 = {
      //   method: 'POST',
      //   url: 'https://rewriter-paraphraser-text-changer-multi-language.p.rapidapi.com/rewrite',
      //   headers: {
      //     'content-type': 'application/json',
      //     'x-rapidapi-host': 'rewriter-paraphraser-text-changer-multi-language.p.rapidapi.com',
      //     'x-rapidapi-key': '1586fbc12bmsh35e444ee1dbc172p1f57bdjsne997fa52754e'
      //   },
      //   data: {language: 'en', strength: 3, text: result}
      // };

      // return axios.request(options2);
      model_init(result, res);
    // res.json(response.data);
    })
    // .then(function (_response) {
    //     console.log(_response.data);
    //     res.json(_response.data);
    //   })
    .catch(function (error) {
      console.error(error);
      res.status(500).json(error);
    });
});
module.exports = router;
