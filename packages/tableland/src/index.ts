import { Database } from "@tableland/sdk";
import { Wallet, getDefaultProvider, providers } from "ethers";
import * as dotenv from "dotenv";
dotenv.config();

type MyWindow = typeof window & { ethereum: any };
// You can also pull getDefaultProvider from the SDK's 'helpers' module

const privateKey = process.env.PRIVATE_KEY as string;
const wallet = new Wallet(privateKey);
// To avoid connecting to the browser wallet (locally, port 8545),
// replace the URL with a provider like Alchemy, Infura, Etherscan, etc.
// For example: "https://polygon-mumbai.g.alchemy.com/v2/${process.env.YOUR_ALCHEMY_KEY}"
// const provider = getDefaultProvider((window as MyWindow).ethereum);

const provider = getDefaultProvider(process.env.ALCHEMY_URL);
// const signer = wallet.connect(provider);
const signer = wallet.connect(provider);

const db = new Database<HealthBot>({ signer });
const tableName: string = "healthbot_80001_1"; // Our pre-defined health check table

interface HealthBot {
  counter: number;
}

// Type is inferred due to `Database` instance definition.
// Or, it can be identified in `prepare`.
export const getResults = async () => {
  try {
    const { meta: create } = await db
      .prepare(`CREATE TABLE Anjana (id integer primary key, name text);`)
      .run();
    console.log({ txnName: create.txn?.name, create });
    return { results: {} };
  } catch (error) {
    console.log("db error", { error });

    return { error };
  }
};
