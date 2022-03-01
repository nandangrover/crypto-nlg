const express = require("express");
const axios = require("axios");
const router = express.Router();
const fs = require("fs");
const model_init = require("../../utils/model_initiator");
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
        url: "https://api.nlpcloud.io/v1/gpu/gpt-j/generation",
        headers: {
          "content-type": "application/json",
          "Authorization":
            "Token f701781ebfa97612580d11eae11ac9c2157e2db9"
        },
        data: {
          max_length: 512,
          text: result,
        },
      };

      // return axios.request(options2)
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
