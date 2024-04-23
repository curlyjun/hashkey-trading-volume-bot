import axios from "axios";

// 비트코인 가격 가져오기
async function getBTCUSD() {
  try {
    const { data } = await axios.get(
      "https://api-pro.sim.hashkeydev.com/quote/v1/ticker/price?symbol=BTCUSDC"
    );
    console.log(data);
    return data[0].p;
  } catch (error) {
    console.error("getBTCUSDC error: ", error);
  }
}

async function main() {
  const bitcoinPrice = await getBTCUSD();
}

main();
