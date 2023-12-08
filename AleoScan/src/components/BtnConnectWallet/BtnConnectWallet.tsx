// import { WalletMultiButton } from "@demox-labs/aleo-wallet-adapter-reactui";
import { LeoWalletName } from "@demox-labs/aleo-wallet-adapter-leo";
import { shortenAddress } from "@src/utils/lib";
import { useConnect, useDisconnect} from "aleo-hooks";
import {useMemo} from "react"

const BtnConnectWallet =()=>{
  const { connect, connected, address } = useConnect()
  const { disconnect } = useDisconnect();

  const formattedAddress = useMemo(() => shortenAddress(String(address), 6, 4), [address])

  const connectHandler = () => connect(LeoWalletName)


    const onClickWalletBtn = async () => {
      if(!connected) {
        connectHandler()
      }
      else {
        console.log("Disconnect...")
        disconnect()
      }
    }

  return(
    <>
    <button 
      className="py-2 px-8 rounded-[10px] bg-[#100413] border border-[#F4B6CC] button-wallet"
      id='connect' 
      draggable="false" 
      onClick={onClickWalletBtn}
    >
      <p className="text-white text-base font-semibold">{ address ? formattedAddress : "Connect"}</p>     
    </button>

    </>
    
  )
}

export default BtnConnectWallet;
