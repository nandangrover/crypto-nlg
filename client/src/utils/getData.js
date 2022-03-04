import { tsvParse } from  "d3-dsv";
import { timeParse } from "d3-time-format";

function parseData(parse) {
  console.log(parse);
	let parsed = parse.map(d => ({
    "date": new Date(1645970400000),
    "open": d.Open,
    "high": d.High,
    "low": d.Low,
    "close": d.Close,
    "volume": d.Volume
  }));
  return parsed;
}

const parseDate = timeParse("%Y-%m-%d");

export function getData(jsonData) {
  console.log(parseData(jsonData))
	// const promiseMSFT = fetch("https://cdn.rawgit.com/rrag/react-stockcharts/master/docs/data/MSFT.tsv")
	// 	.then(response => response.text())
	// 	.then(data => tsvParse(data, parseData(parseDate)))
	return parseData(jsonData);
}