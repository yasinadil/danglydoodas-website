"use client";
import React from "react";
import Navbar from "@/components/Navbar";
// import { ConnectWallet } from "@thirdweb-dev/react";
import GIF from "@/components/gif";
import Mint from "@/components/mint";
import VideoCard from "@/components/video";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { RainbowConnectButton } from "@/components/connect-button";
import { ToastContainer } from "react-toastify";
import { nft_address } from "../config/config";

function App() {
  return (
    <div className="min-h-screen">
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <div className="flex justify-center bg-neutral-900">
        <div className="px-2 md:px-8 w-screen 2xl:max-w-[1536px]">
          <Navbar />
        </div>
      </div>
      <div className="flex justify-center items-center md:h-[calc(100vh-116px)]">
        <div className="px-2 md:px-12 w-screen 2xl:max-w-[1536px] ">
          <div className="flex-col pt-14 md:pt-14">
            {/* <article className="prose md:max-w-none pb-14">
                <h1>Garlic bread with cheese: What the science tells us</h1>
                <p>
                  For years parents have espoused the health benefits of eating
                  garlic bread with cheese to their children, with the food
                  earning such an iconic status in our culture that kids will
                  often dress up as warm, cheesy loaf for Halloween.
                </p>
                <p>
                  But a recent study shows that the celebrated appetizer may be
                  linked to a series of rabies cases springing up around the
                  country.
                </p>
              </article> */}
            <div className="flex justify-center">
              {/* <ConnectWallet theme="light" btnTitle="Connect Wallet" /> */}
              <RainbowConnectButton />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 space-y-4 place-content-center md:space-y-0 md:space-x-4 pt-10">
              <GIF />
              <Mint />
              <VideoCard />
            </div>
          </div>

          <div className="flex justify-center items-center my-10">
            <div>
              <label className="label">
                <span className="label-text font-medium">CONTRACT ADDRESS</span>
              </label>
              <div className="join">
                <input
                  className="input input-bordered join-item w-[300px] md:w-[500px]"
                  value={nft_address}
                  readOnly
                />

                <CopyToClipboard text={nft_address}>
                  <button className="btn join-item rounded-r-full">
                    <svg
                      width="15"
                      height="15"
                      viewBox="0 0 15 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1 9.50006C1 10.3285 1.67157 11.0001 2.5 11.0001H4L4 10.0001H2.5C2.22386 10.0001 2 9.7762 2 9.50006L2 2.50006C2 2.22392 2.22386 2.00006 2.5 2.00006L9.5 2.00006C9.77614 2.00006 10 2.22392 10 2.50006V4.00002H5.5C4.67158 4.00002 4 4.67159 4 5.50002V12.5C4 13.3284 4.67158 14 5.5 14H12.5C13.3284 14 14 13.3284 14 12.5V5.50002C14 4.67159 13.3284 4.00002 12.5 4.00002H11V2.50006C11 1.67163 10.3284 1.00006 9.5 1.00006H2.5C1.67157 1.00006 1 1.67163 1 2.50006V9.50006ZM5 5.50002C5 5.22388 5.22386 5.00002 5.5 5.00002H12.5C12.7761 5.00002 13 5.22388 13 5.50002V12.5C13 12.7762 12.7761 13 12.5 13H5.5C5.22386 13 5 12.7762 5 12.5V5.50002Z"
                        fill="currentColor"
                        fillRule="evenodd"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </button>
                </CopyToClipboard>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="block md:hidden">
        <div className="flex justify-center bg-neutral-900">
          <div className="px-2 md:px-8 w-screen">
            <footer className="footer footer-center py-4 text-white">
              <div>
                <p>Copyright © 2023 TDC, LLC All Rights Reserved.</p>
              </div>
            </footer>
          </div>
        </div>
      </div>
      <div className="hidden md:block">
        <div className="absolute bottom-0 flex left-[50%] translate-x-[-50%] justify-center bg-neutral-900">
          <div className="px-2 md:px-8 w-screen">
            <footer className="footer footer-center p-6 text-white">
              <div>
                <p>Copyright © 2023 TDC, LLC All Rights Reserved.</p>
              </div>
            </footer>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
