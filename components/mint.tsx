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
import { RainbowConnectButton } from "./connect-button";

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
    <div className="flex items-center h-full">
      <div className="flex flex-col justify-evenly h-[260px] sm:h-full w-full text-neutral-950 px-4 py-4 sm:py-0">
        <div className="hidden sm:block">
          <div className="flex justify-center">
            <RainbowConnectButton />
          </div>
        </div>
        <div>
          <h1 className="text-center text-[24px] font-semibold flex flex-col justify-start items-center text-white">
            FREE MINT LIVE NOW
            <span className="text-center text-lg pb-1 font-semibold">
              (you pay the gas)
            </span>
          </h1>
          <h2 className="text-white text-center text-[22px]">
            Limit 1 NFT per wallet
          </h2>
        </div>
        <div className="flex justify-center">
          <button
            onClick={() => mintNFT()}
            className={`flex justify-evenly items-center text-black ${
              requestLoading || txLoading ? " pl-3 pr-0 " : " pr-2 pl-3 "
            } py-1 rounded-md w-[150px] bg-neutral-100 text-neutral-900 hover:bg-neutral-100/80 dark:bg-neutral-800 dark:text-neutral-50 dark:hover:bg-neutral-800/80`}
          >
            <span className="text-[16px]" style={{ fontFamily: "Noto 400" }}>
              {requestLoading || txLoading ? "MINTING..." : "MINT NOW"}
            </span>

            <span className="flex items-center text-xl">
              {requestLoading || txLoading ? (
                <svg
                  className="animate-spin -ml-1 mr-3 h-5 w-5 text-black"
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
                    fill="black"
                  />
                </svg>
              )}
            </span>
          </button>
        </div>
        <div className="line">
          <div
            className="color"
            style={{
              width: `${(Number(totalMintedState) / 10000) * 100}%`,
            }}
          ></div>
          <p className="text-sm paraLine flex gap-x-2">
            <span>TOTAL MINTED</span>

            <span>
              {totalMintedState
                ?.toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}{" "}
              / 10,000
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
