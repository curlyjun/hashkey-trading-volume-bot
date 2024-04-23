import axios from "axios";
import "dotenv/config";

// constants

/** Get Symbol Price Ticker */
const GET_SYMBOL_PRICE =
  "https://api-pro.sim.hashkeydev.com/quote/v1/ticker/price";

// 비트코인 가격 가져오기
async function getBTCUSD() {
  try {
    const url = `${GET_SYMBOL_PRICE}?symbol=BTCUSDC`;

    const { data } = await axios.get(url);
    console.log(data);
    return data[0].p;
  } catch (error) {
    console.error("getBTCUSDC error: ", error);
  }
}

async function main() {
  const bitcoinPrice = await getBTCUSD();
  console.log(process.env.API_KEY);
}

main();
