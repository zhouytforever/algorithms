export const stock = prices => {
  let profit = 0
  let today = 0
  let yesterday = 0
  const period = prices.length
  while (today < period) {
    if (prices[today] > prices[yesterday]) {
      profit += prices[today] - prices[yesterday]
    }
    yesterday = today
    today++
  }
  return profit
}
