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
      // model_init(result, res);
      const data = {
        nlg: {
          summary: `The live ${coin_data.coinInfo.name} price today is 0.88 USD with a 24-hour trading volume of 1,302,118,339.57 USD. The Cardano price went down by -1.21% in the last 24 hours. It gained 2.97% in the last 7 days. The Market cap of the Cardano is 28,354,543,219 USD with a maximum supply of 45 billion ADA coins.`,
          sentiment:
            "The popularity of Cardano has changed by 11.56% in the last 24hrs indicating a high social media engagement. The overall social score for the coin is 3.1 million. The average sentiment for the coin as a whole has changed by 2.86%. The twitter engagement includes 1,057 tweets and 3.1 million twitter followers. The average tweet sentiment is 211.4.",
          technical:
            "The Cardano last-week relative strength index (RSI), a popular momentum indicator, reaches (35%) and indicates a natural condition, which means the price may keep moving on the same trend.While it closes below the EMA20 indicator, showing that it is in a down-trend.In contrast, the short EMA20 is above the long EMA50, validating a general bearish status.",
          recommendation:
            "The RSI Value is at 35 which means neutral state would be the best option. The social engagement for the coin increased by 11.56% suggests that the market is stable.",
        },
        lang: "en",
        json: coin_data,
      };
      res.json(data);
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
