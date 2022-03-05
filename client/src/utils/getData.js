export function getData(jsonData) {
  let parsed = jsonData.map(d => ({
    "date": new Date(d.openTime),
    "open": d.Open,
    "high": d.High,
    "low": d.Low,
    "close": d.Close,
    "volume": d.Volume
  }));
  return parsed;
}