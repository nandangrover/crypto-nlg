import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, useParams } from "react-router-dom";
// import axios from "axios";
// import CssBaseline from "@mui/material/CssBaseline";
// import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Footer from "./Footer";
import ReactMarkdown from "react-markdown";
// import Paper from "@mui/material/Paper";

const Documentation = () => {
  //   const symbol = window.location.href.split("/").slice(-1)[0];
  const [data, setData] = useState({});
  //   // Similar to componentDidMount and componentDidUpdate:
  //   useEffect(() => {
  //     fetch(`api/nlg/${symbol}`)
  //       .then((res) => {
  //         return res.json();
  //       })
  //       .then((response) => {
  //         setData(response);
  //       }); // re-direct to login on successful register
  //   }, []);

  const markdown = `
# NLG for crypto coins performance and sentiments

**Commercial Analysis**

By: Finance 1 Group

UNIVERSITY OF ABERDEEN

MARCH 2022

**EXECUTIVE SUMMARY**

##
## **Vision**

Our vision is to develop a prototype cryptocurrency risk analysis and prediction solution to minimise investment risk and losses in an epileptic stock market.

## 1. Introduction

Cryptocurrency has become a force since its inception over a decade ago, synchronising with the international crisis of 2008 when stakeholders in the financial market lost confidence in the conventional monetary system. Over the years, the currency has been attractive to investors and traders for many reasons: funds transfer and exchange or pseudo-anonymous transfers; to save money. In 2018, &quot;What is bitcoin?&quot; ranked the highest in Google search results obtained from the United Kingdom and United states of America (Redman, 2018). Today, various cryptocurrencies are numbering over 6000, with 5.9 million trading subscribers in the industry (Lee, 2018).

The trading prices of cryptocurrency have become epileptic, hence challenging to forecast owing to how dynamic and volatile the technology has been. This volatility stems from several factors affecting the currencies. Some include (and are not limited to) the small market price in contrast to conventional financial assets such as stocks, bonds and fiat currencies. These factors include news events, unmonitored mining activities, 24/7 trading availability, low liquidity, increasing fluctuations in prices, shifting sentiments, and decentralized high speculations. In crypto, social and community factors matter more than other financial communities. With a couple of tweets, Elon Musk sent Dogecoin soaring up in value (LunarCrush, 2021). Based on the preceding, a solution arose to create a way to make sense of crypto daily data and news feeds to present valuable insights to consumers on live trading trends. Of particular interest is the collective future-telling requirement of suggesting when to buy, hold or sell the currency to minimize risk.

A dominant strategy that investors have imbibed have depended on building Markov chains. This project proposes a rule-based NLG system that generates text narratives in English to help individuals understand their crypto coin interest while providing buy, sell or hold recommendations based on technical indicators. The report covers the study&#39;s objectives, market, competitors and cost of producing the proposed solution. The proposed research and prototype are limited to 7 cryptocurrencies, namely, Bitcoin, Ethereum, Solana, Cardano, Binance Coin, Dogecoin, and XRP, being some of the most popular and valued coins in the market.

The indicators used in this prototype include Relative Strength Index (RSI) value, social score from JSON data, live price, and percentage change within the 24 hours analysis period. The RSI value oscillates between 1 and 100. The general belief is that RSI should be below 30 for buying and over 70 for selling. In simpler words, the lower the RSI, the more undervalued the asset. The objectives the proposed system is to deliver are as follows:

a. Capture the previous week&#39;s indicators of respective coins.

b. Present a summary of the cryptocurrency that includes (market cap, number of tokens available, sentiment analysis, technical description and recommendation).

c. Compare the movements, volatility and trends of cryptocurrencies using (RSI14, OBV, Ema20 and Ema50) indicators.

d. Display the cryptocurrency popularity by providing the last 24-hours socialmedia sentiments calculation and comparing them against the sentiments of the previous 24 hours

e. Generate configurable narratives to suit the needs of the user.

f. Provide explainable Buy/hold/sell recommendations based on theindicators.

g. Build a web portal to present our solution.

h. Integrate the solution from the steps above into Alexa.

## **1.2 AIM**

This report aims to assess the risk faced by cryptocurrency investors in the stock market and proffer a viable solution based on metrics that depict a coin&#39;s performance in the trading market.

## **2. Market**

## **2.1 Market Size**

Cryptocurrency adoption has soared within the last ten years due to variables such as the low cost of ownership, its efficiency, flexibility, global use, and the security attached to the technology and once seen as niche investment; cryptocurrency is a significant component of many portfolios as it is now trading across all markets worldwide. According to time, cryptocurrency is now worth more than 3 Trillion Dollars, which is currently four times more than what is it was at the end of the year 2020 (OSSINGER/BLOOMBERG, 2021). This phenomenon has encouraged investors to invest heavily in cryptocurrency, bringing about an evolution in the space as more functionalities and possibilities such as Decentralized Finance (De-Fi) and Non-Fungible Tokens (NFT) gain traction.

![](RackMultipart20220305-4-1qjz4si_html_5557206b56a90803.png)

Figure 1: Cryptocurrency market capitalization, in trillions (McFall, 2021).

## **2.2 Cryptocurrency adoption**

Cryptocurrency and the internet are often compared as regards their evolution. It is exciting to note that the two have very similar beginnings, which is problematic as major retailers and large companies favour digital payment instead of how they carried our business in the 20th century. Logically, the next step is to adopt an alternative to digital cash that removes or at least reduces the cost in fees that current card providers take (Laboure, n.d.).

![](RackMultipart20220305-4-1qjz4si_html_b2632e17911fd822.png)

Figure 2: Adoption rates of cryptocurrencies and the internet (WatcherNews, 2021)

## **2.2.1 Cryptocurrency and its applications**

1. Low-cost transaction: Right now, the primary use for cryptocurrency is sending and receiving payments. These transactions usually come at a considerably low cost compared to the traditional modes of digital transactions. A well-known example is the case of 99 million dollars was sent, and this transaction cost 40 cents and took two and a half minutes to complete.

1. Private transactions: Privacy-centered cryptocurrencies like Monero allow users to make anonymous transactions. This means that the parties do not need to explain to their financial institution why they are sending large sums of money or explain the source of the funds.

1. Day-to-day spending: As the global acceptance for digital currency increases, it is now possible to carry out our daily expenditures from paying for transportation to purchasing glossaries all the way to even buying vehicles.

## **2.2.2 Challenges faced by Cryptocurrency**

1. Market risk: Despite cryptocurrency&#39;s bolstering waves, this technology is still subject to volatility as with any traded utility, commodity, stock, or currency on the stock market.

1. Security risk: Since cryptocurrency is digital, is it vulnerable to hackers and malicious software that look to gain access to digital wallets and steal their contents. However, best practices are advised to keep one&#39;s investments safe.
2. Competition with fiat currencies: Advocates of cryptocurrency say that it will replace fiat money. This has caused many countries to oppose the technology and even ban coins like Bitcoin.

1. Bad Imagery: Cryptocurrency has had a bad image despite going through several boom phases. Bad actors have taken advantage of this technology and have used it for get-rich-quick schemes deceiving the public, causing many to be sceptical.

## **2.3 Potential of Cryptocurrency**

In the year 2020, the global market size of cryptocurrency was 826.6 million dollars. And even amid the Covid-19 global pandemic, the market experienced a buoyant demand which shocked many. Projections indicate that the market will reach 4.46 billion dollars in 2023 (Goswami, et al., 2021). This projection is achievable with the combined effort from consumers and merchants, tech developers, and investors. Cryptocurrency resents the offset of a new wave of markets driven by technology capable of disrupting well-established practices in the world of finance. It is no longer a discussion of if cryptocurrency will survive the opposition it faces but rather how it will transform and reach maturity.

## **2.4 Target Market**

The target market for this project is new and experienced investors in the cryptocurrency space to get the data they require to make informed and wise decisions when dealing with cryptocurrency. The signals provided from the data analysed may also be issued to traders to tell them when to buy more or sell part of their holdings while on the trade.

## **2.5 The growing demand**

##

The growing demand for cryptocurrency touches all areas of human endeavour. The ever-increasing demand for digital assets &amp; secure transactions is fueling significant market growth for cryptocurrency. There is an increasing demand for secure transactions and the need for low-cost digital currency payment within and across borders, fueling the accelerating cryptocurrency market growth. Large companies are adopting the technology to gain a competitive advantage. Ethereum is one of the leading cryptocurrencies with functions features for enhanced cryptography built to support smart contracts. Cryptocurrency jobs are also in high demand. Jobs include:

## **Business Development Representative**
A business development representative will seek out and push product partnerships can even close deals.

## **Data Scientist**
Analytical data from transactions that help streamline processes are provided by data scientists.

## **Financial Analyst**
The primary job of a financial analyst is to recommend investments and deliver accurate strategies for investment.

## **Security Architect**
The assignment of the Security architect is to use their analytical skills to create systems that keep the organization safe from threats from inside and outside the company.

## **Technical Writers**
Using their understanding of cryptocurrency technology and their persuasive skill in writing, they write a technical report to attract investors.

## **Research Analyst**
With skills in data analysis, writing, critical thinking and communication, they will help educate about development in cryptocurrency.

##


##


## ![](RackMultipart20220305-4-1qjz4si_html_da9a445dfc326a44.png)

## Figure 3: Global Cryptocurrency market share, by end-use, 2020 (FortuneBusinessInsights, 2021).

## **3. Competitors**

## **3.1 Available competitors**

Some competitors to our novel solution are LunarCrush, CoinMetrics and Coin360. These are discussed as follows:

**LunarCrush**. LunarCrush was established in 2018 to help crypto traders anticipate market events. It collects activities across social media for bitcoin, thousands of alternative coins and exchanges, and what influencers are posting, and distils it into bit-size digestible chunks (LunarCrush, 2021). It provides API endpoints for thousands of crypto assets. This is the API from which our web portal solution pulls crypto data. LunarCrush is a free service that has not taken payments to advertise (LunarCrush, 2021). Instead, they are heavily supported through donations by the community of traders, investors and influencers that socially engage with the value that LunarCrush provides.

**Coin Metrics**. CoinMetrics is a provider of crypto financial intelligence providing network data, market data, index, and network risk solutions. CoinMetrics publishes the real-time reference rates stating the reference rate of one unit of the asset quoted in US dollars. For most of 2017 and 2018, Coin Metrics was funded entirely from donations and a few sponsorships (Zheng, Steven, 2022).

**COIN360**. ** ** Coin360is an online information portal that displays current information about cryptocurrencies. Even though it&#39;s not as detailed as our solution, it has the perk of offering free services to anyone who wants to have access to the information it contains. It was established in 2017 by Cointelegraph.com (Peters, n.d.).

##
## **3.2 The system competitive advantages**

The proposed solution utilizes machine learning and rule-based NLG to accomplish its goals. Therefore, the solution described in this report provides advantages beyond the scope of the existing systems offering the same service. These competitive advantages include:

a. Focussed analysis, predictions and recommendations. After analyzing the indicators collected from the source and predictions generated using rule-based NLG, the system provides a narrative for the user. The descriptions provided are paraphrased using machine learning methods to create variations in the output fed to the user. These paraphrased narratives offer the user a summary of movement in the crypto market and recommendations on whether to buy, hold or sell.

b. Integration with Alexa. The system integrates with Alexa and provides voice Interaction between the user and our proposed system. Hence, the user can request information about the seven crypto coins listed previously in section 1.

c. Hybrid Solution. The system we propose provides a hybrid solution of rule-based NLG and machine learning approaches for accuracy in predictions. This approach is tailored towards improving the buy-hold-sell recommendation of the proposed system.

## 4. Cost

## 4.1 Pricing strategy

The pricing strategy our proposed solution adopts is a Freemium Pricing Strategy, advertisement and donations to generate revenue for the product. The freemium pricing offers a basic version of our product hoping that users will eventually pay to upgrade or access more features. In more specific terms, our product generates narratives for the top 2 coins and requires subscription fees from the user for narratives on other coins. We chose this strategy being that free trials and limited memberships introduce users to our software&#39;s full functionality as well as build trust prior to purchasing the software.

### The other ways the service intends to generate revenue are:

a. Advertisements. The service could make income from advertisement placements for companies.

b. Donations. The system seeks to leverage on its user-base community to generate funds to support the continual development of the service.

## 4.2 Cost Analysis

The cost of developing our proposed solution is significantly low compared to crypto exchange systems developed from scratch. The requirements for developing this system are broken into the following:

**Financial cost**. Development processes for our solution includes Arria NLG subscription, Alexa developer registration, hosting costs, frontend and backend development costs, ML development, software testing, etc. Frontend development is carried out using React JS, while the backend was developed using Node JS. Python was used to integrate the paraphraser and pass the output to the web portal. These individual skills outlined have cost implications for the duration of their development and update lifecycles. The Team, would have spent about £3000 to generate a prototype within 1 week of development to pay 3 developers to handle the 3 aspects outlined above.

**Resources**. The resources used have been outlined as Arria NLG, Alexa developer, and the hosting agency. Aside Alexa, the other agencies would require subscription fees. Also, the skillset required for developing Alexa applications was utilized in integrating Alexa into the final product.

**Time**. The duration of the development lifecycle or a burst during a certain referenced period. This refers to the man hours being put into the product development and implementation. As at the time of finalizing this report, the team spent about 1 week in coming up with a prototype.

The overall cost of implementing our proposed solution is about £25,000.

## 5. Summary

Why is this a fantastic product which will be commercially successful? Expand on the fact that analysis shows that investors are generally anxious and sceptical about cryptocurrencies and the fact that its recent loss of value has spiked the need for players like your concept to become highly relevant—[Find out data on your competitors showing a spike in their growth since the value loss]. Where necessary, include graphs.

| The analysis should be roughly 3000-4000 words and must include references explaining where you got the information from. The analysis will be marked on a CGS scale based on the thoroughness and quality of your analysis. |
| --- |

## 6. References

## 7. Appendix

## 7.1 System screen shoots

![](RackMultipart20220305-4-1qjz4si_html_ccc0d600e61b765f.png)

Figure 4: Proposed system dashboard

![](RackMultipart20220305-4-1qjz4si_html_e5882f3a26978a76.png)

Figure 5: Proposed system narrative display page.

![](RackMultipart20220305-4-1qjz4si_html_637c8eb458f92726.png)

Figure 6: Proposed graph display.

## 7.2 Sample Data
`;

  return (
    // console.log(data),
    <div>
      <br />
      {true ? (
        <div>
          <br />
          <Typography variant="h4" component="h2" className="heading">
            Documentation
          </Typography>
          <br />
          <ReactMarkdown children={markdown}></ReactMarkdown>
        </div>
      ) : (
        <div></div>
      )}
      <br />
      <Footer />
    </div>
  );
};

export default Documentation;
