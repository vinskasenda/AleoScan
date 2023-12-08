import IcLogoZksync from "@icon/container/ic_logo-zksync.svg";
import IcToken from "@icon/container/ic_token.svg";
import Item from "@image/container/item.png";
import { TESTNET3_API_URL, getAleoTransactionsForProgram, getMappingValue } from "@src/aleo/rpc";
import { joinBigIntsToString, parseStringToBigIntArray } from "@src/utils/lib";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import NFTItem from "./NFTItem";

const GridItem = () => {
    const location = useLocation();
    const params = new URLSearchParams(location.search);
    const programId = params.get("address");
    const [NFTs, setNFTs] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        getNFTs();

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const getNFTs = async () => {
        setLoading(true);
        try {
            const rs = await getAleoTransactionsForProgram(programId, "mint_nft_public", TESTNET3_API_URL);
            const resPromises = rs.map(async (txM: any) => {
                const tx = txM.transaction;
                const urlBigInts = parseStringToBigIntArray(tx.execution.transitions[0].inputs[1].value);
                const tokenIds = parseStringToBigIntArray(tx.execution.transitions[0].inputs[0].value);
                const tokenString = tokenIds.toString().substring(0);
                const relativeUrl = joinBigIntsToString(urlBigInts);
                const metadataRes = await fetch(relativeUrl);
                const metadata = await metadataRes.json();

                const owner = "aleo1yfqjuyuxs8zdvy76mfndv4n6gavnw03xafll8eywz0ds0358ncfqfrdp09";
                console.log("Log check metadata: ", metadata);
                return {
                    tokenId: `${tokenString}u128`,
                    url: metadata.url,
                    description: metadata.description,
                    name: metadata.name,
                    owner,
                };
            });

            const data = await Promise.all(resPromises);

            console.log("Log check data: ", data);

            const res = data.filter((v, i, a) => a.findIndex((t) => t.url === v.url && t.owner === v.owner) === i);
            setNFTs(res);
            setLoading(false);
            console.log("Log check res: ", data);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="grid grid-cols-4 gap-x-4 gap-y-5 flex-wrap">
            {loading ? (
                <div className="text-white whitespace-nowrap">Loading...</div>
            ) : (
                <>
                    {NFTs.length > 0 ? (
                        NFTs.map((item, index) => {
                            return <NFTItem key={index} data={item} />;
                        })
                    ) : (
                        <div className="text-white whitespace-nowrap">"No NFT found with this program ID"</div>
                    )}
                </>
            )}
        </div>
    );
};

export default GridItem;
