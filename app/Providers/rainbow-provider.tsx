"use client";
import React from "react";
import "@rainbow-me/rainbowkit/styles.css";

import {
  connectorsForWallets,
  RainbowKitProvider,
  darkTheme,
} from "@rainbow-me/rainbowkit";

import { configureChains, createConfig, mainnet, WagmiConfig } from "wagmi";
import { goerli } from "wagmi/chains";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { publicProvider } from "wagmi/providers/public";
import {
  injectedWallet,
  rainbowWallet as rainbow,
  metaMaskWallet,
  coinbaseWallet as coinbase,
  walletConnectWallet,
  trustWallet as trust,
  uniswapWallet,
  talismanWallet,
  ledgerWallet,
} from "@rainbow-me/rainbowkit/wallets";

export default function RainbowProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const { chains, publicClient } = configureChains(
    [goerli],
    [
      alchemyProvider({ apiKey: process.env.NEXT_PUBLIC_ALCHEMY_KEY! }),
      publicProvider(),
    ]
  );

  const connectors = connectorsForWallets([
    {
      groupName: "Recommended",
      wallets: [
        metaMaskWallet({
          projectId: process.env.NEXT_PUBLIC_PROJECT_ID!,
          chains,
        }),
        coinbase({ chains, appName: "danglydoodads" }),
        walletConnectWallet({
          projectId: process.env.NEXT_PUBLIC_PROJECT_ID!,
          chains,
        }),
        trust({
          projectId: process.env.NEXT_PUBLIC_PROJECT_ID!,
          chains,
        }),
        ledgerWallet({
          projectId: process.env.NEXT_PUBLIC_PROJECT_ID!,
          chains,
        }),
      ],
    },
    {
      groupName: "Others",
      wallets: [
        injectedWallet({ chains }),
        rainbow({ projectId: process.env.NEXT_PUBLIC_PROJECT_ID!, chains }),
        uniswapWallet({
          projectId: process.env.NEXT_PUBLIC_PROJECT_ID!,
          chains,
        }),
        talismanWallet({
          chains,
        }),
      ],
    },
  ]);

  const wagmiConfig = createConfig({
    autoConnect: true,
    connectors,
    publicClient,
  });

  return (
    <WagmiConfig config={wagmiConfig}>
      <RainbowKitProvider
        theme={darkTheme()}
        chains={chains}
        appInfo={{
          appName: "danglydoodads",
        }}
        modalSize="compact"
      >
        {children}
      </RainbowKitProvider>
    </WagmiConfig>
  );
}
