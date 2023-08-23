"use client";
import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";
import React, { useState } from "react";
import giphy from "../public/assets/giphy.gif";
import { nft_address } from "../config/config";
import { useWalletClient } from "wagmi";
import { useContractWrite, useContractRead } from "wagmi";
import { ToastContainer, toast } from "react-toastify";
import { useWaitForTransaction } from "wagmi";
import "react-toastify/dist/ReactToastify.css";
const NFT_ABI = require("../config/NFT_ABI.json");

export default function Mint() {
  const [totalMintedState, setTotalMintedState] = useState<string>("0");
  const { data: walletClient, isError, isLoading } = useWalletClient();
  const {
    data: totalMinted,
    isError: totalMintedError,
    isLoading: totalMintedLoading,
  } = useContractRead({
    address: nft_address,
    abi: NFT_ABI,
    functionName: "totalSupply",
    onSuccess(totalMinted) {
      setTotalMintedState(totalMinted?.toString());
    },
  });

  const {
    data,
    isLoading: requestLoading,
    write: mintNFT,
  } = useContractWrite({
    address: nft_address,
    abi: NFT_ABI,
    functionName: "mint",
    onError(error: any) {
      toast.error(error.shortMessage, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    },
  });

  const {
    data: txData,
    isError: txError,
    isLoading: txLoading,
  } = useWaitForTransaction({
    hash: data?.hash,
    onSuccess(data) {
      toast.success("Sucessful Mint!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      console.log("Success", data);
    },
    onError(error: any) {
      toast.error(error.shortMessage, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      console.log("Error from hash", error);
    },
  });

  return (
    <div className="flex items-center">
      <div className="flex flex-col justify-between h-fit w-full rounded-lg border border-neutral-200 bg-white text-neutral-950 shadow-sm dark:border-neutral-800 dark:bg-neutral-950 dark:text-neutral-50 px-6 py-6">
        <h1 className="text-center text-2xl pb-1">Mint Live Now!</h1>
        {/* <CardDescription className="text-center">
            Total Minted {totalMintedState} / 10,000
          </CardDescription> */}
        <div className="line">
          <div
            className="color"
            style={{
              width: `${Number(totalMintedState) / 10000}%`,
            }}
          ></div>
          <p className="text-white text-xs paraLine">
            Total Minted {totalMintedState} / 10,000
          </p>
        </div>

        {/* <CardContent>
        
      </CardContent> */}

        <div className="flex justify-center">
          {/* <Web3Button
          contractAddress={nft_address}
          contractAbi={NFT_ABI}
          theme="dark"
          // Call the name of your smart contract function
          action={(contract) => contract.call("mint", [])}
          onSuccess={(result) => console.log(result)}
          onError={(error) => console.log(error)}
        >
          <span>BUY NOW</span>
        </Web3Button> */}
          <button
            onClick={() => mintNFT()}
            className={`flex justify-between items-center bg-neutral-900 rounded-2xl ${
              requestLoading || txLoading ? " pl-3 pr-0 " : " pr-2 pl-3 "
            } py-1.5 text-white my-4 w-[180px]`}
          >
            <span className="text-lg">
              {requestLoading || txLoading ? "Minting..." : "Mint Now"}
            </span>

            <span className="flex items-center text-xl">
              {requestLoading || txLoading ? (
                <svg
                  className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
              ) : (
                <svg
                  enableBackground="new 0 0 226.777 226.777"
                  width="27px"
                  height="27px"
                  id="Layer_1"
                  version="1.1"
                  viewBox="0 0 226.777 226.777"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M113.313,0C50.732,0,0,50.732,0,113.313s50.732,113.313,113.313,113.313s113.313-50.732,113.313-113.313  S175.894,0,113.313,0z M111.844,188.386l-44.78-63.344l44.78,26.218V188.386z M111.844,141.976l-45.083-26.408l45.083-19.748  V141.976z M111.844,92.647l-43.631,19.11l43.631-73.306V92.647z M114.75,38.429l44.244,73.6L114.75,92.647V38.429z M114.75,188.386  V151.26l44.78-26.218L114.75,188.386z M114.75,141.977V95.821l45.116,19.762L114.75,141.977z"
                    fill="white"
                  />
                </svg>
              )}
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
