import { useWallet } from "@demox-labs/aleo-wallet-adapter-react";
import {
  TESTNET3_API_URL,
  getAleoTransactionsForProgram,
  //   TESTNET3_API_URL,
  getMappingValue, getNFTs,
  //   getMintedNFTs,
} from "@src/aleo/rpc";
import Header from "@src/components/Header/Header";
import { joinBigIntsToString, parseStringToBigIntArray } from "@src/utils/lib";
import { useEffect, useState } from "react";
import { json } from "react-router-dom";
// import useSWR from "swr";

const TestPage = () => {
  const { publicKey } = useWallet();

  console.log("Log check public Key: ", publicKey);
  const [existNfts, setExistNfts] = useState<number[]>([]);

  useEffect(() => {
    // getMintedNFTs(TESTNET3_API_URL, "dns_esollabs.aleo").then(res => {
    //     console.log(res)
    // })

    // async function get() {
    //   const eNfts = [];
    //   for (let i = 0; i < 9; i++) {
    //     const rs = await getMappingValue(
    //       "raceanimals_v2.aleo",
    //       "publicNftData",
    //       `${i}u128`
    //     );
    //     console.log('Log check rs: ', rs)
    //     console.log('Log check rs: ', parseStringToBigIntArray(rs))
        
    //     if (rs) {
    //       const uriBigInt:bigint[] = parseStringToBigIntArray(rs)
    //       const urlImage = joinBigIntsToString(uriBigInt)
    //       console.log('Log check response: ', urlImage)
    //       eNfts.push(i);
    //     }
    //   }
    //   setExistNfts(eNfts);
    // }

    // get();

    // if (publicKey) {
    //   getMappingValue(
    //     "privacy_pride_nft_test13.aleo",
    //     "nfts_to_mint",
    //     "0u128"
    //   ).then((res) => {
    //     console.log("Log check res: ", res);
    //   });
    // }

    const get = async () => {
       const rs = await getAleoTransactionsForProgram('raceanimals_v2.aleo', 'mint_nft_public', TESTNET3_API_URL)
       // eslint-disable-next-line @typescript-eslint/no-explicit-any
       const res = rs.map((txM: any) => {
        const tx = txM.transaction;
        const urlBigInts = parseStringToBigIntArray(tx.execution.transitions[0].outputs[0].value);
        const relativeUrl = joinBigIntsToString(urlBigInts);
        console.log('Log check url: ', relativeUrl)

        return txM
       })
       console.log('log check rs: ', res)
    }

    get()

  }, [publicKey]);

  console.log("Log check exists NFT: ", existNfts);

  return (
    <div className="">
      <Header />
    </div>
  );
};

export default TestPage;
