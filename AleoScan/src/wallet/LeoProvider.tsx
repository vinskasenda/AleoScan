import { LeoWalletAdapter } from "@demox-labs/aleo-wallet-adapter-leo";
import { WalletProvider } from "aleo-hooks";
import React, { useMemo } from "react";

type Props = {
  children: React.ReactElement;
};

const LeoProvider = (props: Props) => {
  const { children } = props;

  const wallets = useMemo(
    () => [
      new LeoWalletAdapter({
        appName: "Leo Demo App",
      }),
    ],
    []
  );

  return (
    <WalletProvider
      wallets={wallets}
      autoConnect
    >
      {children}
    </WalletProvider>
  );
};

export default LeoProvider;
