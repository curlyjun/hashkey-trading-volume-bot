import axios from "axios";
import "dotenv/config";

const myAxios = axios.create({
  baseURL: "https://api-pro.sim.hashkeydev.com",
  headers: {
    "X-HK_APIKEY": process.env.API_KEY,
  },
});

// constants

/** Get Symbol Price Ticker */
const GET_SYMBOL_PRICE = "/quote/v1/ticker/price";
/** Get Account Information */
const GET_ACCOUNT_INFO = "/api/v1/account";

// 비트코인 가격 가져오기
async function getBTCUSD() {
  try {
    const url = `${GET_SYMBOL_PRICE}?symbol=BTCUSDC`;

    const { data } = await myAxios.get(url);
    return data[0].p;
  } catch (error) {
    console.error("getBTCUSDC error: ", error);
  }
}

async function getAccountInfo() {
  try {
    const searchParams = new URLSearchParams({
      timestamp: new Date().getTime(),
      signature: process.env.SIGNATURE,
    });

    const { data } = await myAxios.get(
      `${GET_ACCOUNT_INFO}?${searchParams.toString()}`
    );
    console.log("account", data);
    return data;
  } catch (error) {
    console.error("getAccountInfo error: ", error);
  }
}

async function main() {
  const bitcoinPrice = await getBTCUSD();
  const account = await getAccountInfo();

  console.log("bitcoin price: ", bitcoinPrice);
  console.log("account: ", account);
}

main();
