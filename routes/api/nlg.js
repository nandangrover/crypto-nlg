const express = require("express");
const axios = require("axios");
const router = express.Router();
const fs = require("fs");
// const { stripHtml } = require("string-strip-html");
// const btc = require("../../config/btc.json");

router.get("/", (req, res) => {
  // const fs = require('fs');
  const btc = JSON.parse(fs.readFileSync("config/btc.json", "utf8"));

  const options = {
    method: "POST",
    url: "https://app.studio.arria.com:443/alite_content_generation_webapp/text/bwjpLqodkLv",
    headers: {
      "content-type": "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzUxMiJ9.eyJqdGkiOiJhbF90ekdLVTFDQndMaHNPdk9qQmRBd1EiLCJpYXQiOjE2NDYwNTA4ODcsImV4cCI6MTgwMzczMDg4NywiaXNzIjoiQUxpdGUiLCJzdWIiOiJ4MEFjNXZWMXh0X3QiLCJBTGl0ZS5wZXJtIjpbInByczp4OmJ3anBMcW9ka0x2Il0sIkFMaXRlLnR0IjoidV9hIn0.DPICDsWnGGC53ypXn30_2NKIjyFunyjy4XKdNpRUWRD24FLhcTkMi1EOxzfBCIzexQCIasMhFtPqMA2zSaqiQQ",
    },
    data: btc,
  };

    axios
    .request(options)
    .then(function (response) {
      const { result } = response.data[0];

      const options2 = {
        method: "POST",
        url: "https://rewriter-paraphraser-text-changer-multi-language.p.rapidapi.com/rewrite",
        headers: {
          "content-type": "application/json",
          "x-rapidapi-host":
            "rewriter-paraphraser-text-changer-multi-language.p.rapidapi.com",
          "x-rapidapi-key":
            "1586fbc12bmsh35e444ee1dbc172p1f57bdjsne997fa52754e",
        },
        data: {
          language: "en",
          strength: 3,
          text: result,
        },
      };

      return axios.request(options2)
    // res.json(response.data);
    })
    .then(function (_response) {
        console.log(_response.data);
        res.json(_response.data);
      })
    .catch(function (error) {
      console.error(error);
      res.status(500).json(error);
    });
});
module.exports = router;
