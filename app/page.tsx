"use client";
import React, { useState } from "react";
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
  const [tooltipVisible, setTooltipVisible] = useState(false);

  const handleCopyClick = () => {
    // Logic to copy the input value goes here

    setTooltipVisible(true);

    setTimeout(() => {
      setTooltipVisible(false);
    }, 3000);
  };
  return (
    <div className="min-h-screen bg-[#75AFE9]">
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
      <div className="flex justify-center bg-[#75AFE9]">
        <div className="px-2 md:px-[12px] w-screen max-w-[1240px]">
          <Navbar />
        </div>
      </div>
      <div className="flex justify-center">
        <div className="flex items-center w-screen max-w-[940px] sm:h-[calc(100vh-238px)] px-2 md:px-0">
          <div>
            <div className="relative flex flex-col gap-y-8 pt-36 sm:pt-0">
              <div className="grid grid-cols-1 md:grid-cols-3 space-y-4 items-center place-content-center md:space-y-0 md:space-x-4 pt-0 sm:pt-0">
                <GIF />
                <Mint />
                <VideoCard />
              </div>
              {/* <div className=" hidden sm:block absolute top-0 left-[50%] translate-x-[-50%]">
                {" "}
                <RainbowConnectButton />
              </div> */}
            </div>

            <div className="flex items-center pt-12 sm:pt-10 pb-8 sm:pb-0 gap-x-2">
              <span className="w-[230px] label-text font-medium text-[15px] md:text-[15px] text-white text-right hidden sm:block">
                CONTRACT ADDRESS:
              </span>

              <div className="absolute left-[50%] translate-x-[-50%]">
                <div className="join">
                  <input
                    className="input input-bordered join-item w-[200px] md:w-[412px] h-[2rem] min-h-[2rem]"
                    value={nft_address}
                    readOnly
                  />

                  <CopyToClipboard text={nft_address}>
                    <div
                      className={`${tooltipVisible && "tooltip tooltip-open"}`}
                      data-tip={"address copied"}
                    >
                      <button
                        className="btn join-item rounded-r-full h-[2rem] min-h-[2rem]"
                        onClick={handleCopyClick}
                      >
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
                    </div>
                  </CopyToClipboard>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="block md:hidden">
        <div className="flex justify-center bg-[#75AFE9]">
          <div className="px-2 md:px-8 w-screen">
            <footer className="flex flex-col gap-y-4 py-4 text-white">
              <div>
                <p className="text-center text-[15px]">
                  Copyright © 2023 TDC, LLC All Rights Reserved.
                </p>
              </div>
              <div className=" flex justify-around">
                <a
                  href="https://opensea.io/collection/danglydoodads"
                  target="_blank"
                  rel="norefferer"
                >
                  <svg
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_2825_21)">
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M12.1008 0.480483C5.65896 0.426723 0.426723 5.65896 0.480483 12.1008C0.534243 18.3564 5.64552 23.4677 11.8992 23.5195C18.341 23.5752 23.5752 18.341 23.5195 11.8992C23.4677 5.64552 18.3564 0.534243 12.1008 0.480483ZM8.85744 6.63337L8.85766 6.63365L5.44752 12.5333H9.11496C9.63672 11.7382 9.94008 10.7858 9.94008 9.76321C9.94008 8.58181 9.53457 7.494 8.85766 6.63365L8.85768 6.63361L8.85744 6.63337ZM19.9678 13.9507C20.0136 13.9313 20.04 13.889 20.04 13.8396L20.0402 13.8401V13.0783C20.0402 13.0008 19.9644 12.9427 19.8886 12.9638C19.8886 12.9638 16.265 13.7962 16.2228 13.8084C16.1803 13.8206 16.1645 13.8454 16.1645 13.8454C15.7975 14.3374 15.0254 15.1536 14.5951 15.1536H12.599V13.8434H14.1895C14.4168 13.8434 14.6338 13.7518 14.7907 13.5895C15.607 12.7433 16.0795 11.7365 16.0795 10.6555C16.0795 8.81304 14.7024 7.18368 12.5988 6.2016V5.32176C12.5988 4.94256 12.2921 4.63584 11.9129 4.63584C11.5337 4.63584 11.227 4.94256 11.227 5.32176V5.6868C10.638 5.514 10.0138 5.38344 9.36144 5.3076C10.4405 6.48 11.1 8.04768 11.1 9.7668C11.1 11.3078 10.5727 12.7236 9.6876 13.8451H11.227V15.157H8.9736C8.66832 15.157 8.4216 14.91 8.4216 14.605V14.0318C8.4216 13.9313 8.34048 13.8485 8.23824 13.8485H5.26728C5.2092 13.8485 5.15976 13.8962 5.15976 13.9543C5.15808 16.301 7.01472 18.0626 9.23472 18.0626H15.503C16.6446 18.0626 17.3066 16.951 17.9447 15.8794C18.1464 15.5407 18.3457 15.206 18.557 14.9117C18.8993 14.4374 19.7191 14.0566 19.9678 13.9507Z"
                        fill="currentColor"
                      ></path>
                    </g>
                    <defs>
                      <clipPath id="clip0_2825_21">
                        <rect width="24" height="24" fill="white"></rect>
                      </clipPath>
                    </defs>
                  </svg>
                </a>

                <a
                  href="https://twitter.com/danglydoodads"
                  target="_blank"
                  rel="norefferer"
                >
                  <svg
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M18.244 2.25H21.552L14.325 10.51L22.827 21.75H16.17L10.956 14.933L4.99003 21.75H1.68003L9.41003 12.915L1.25403 2.25H8.08003L12.793 8.481L18.244 2.25ZM17.083 19.77H18.916L7.08403 4.126H5.11703L17.083 19.77Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </a>

                <a
                  href="https://discord.gg/XU7UfZGgcx"
                  target="_blank"
                  rel="norefferer"
                >
                  <svg
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15.432 11.4C15.432 12.132 14.892 12.732 14.208 12.732C13.536 12.732 12.984 12.132 12.984 11.4C12.984 10.668 13.524 10.068 14.208 10.068C14.892 10.068 15.432 10.668 15.432 11.4ZM9.828 10.068C9.144 10.068 8.604 10.668 8.604 11.4C8.604 12.132 9.156 12.732 9.828 12.732C10.512 12.732 11.052 12.132 11.052 11.4C11.064 10.668 10.512 10.068 9.828 10.068ZM22.5 2.472V24C19.4768 21.3284 20.4437 22.2127 16.932 18.948L17.568 21.168H3.96C2.604 21.168 1.5 20.064 1.5 18.696V2.472C1.5 1.104 2.604 0 3.96 0H20.04C21.396 0 22.5 1.104 22.5 2.472ZM19.08 13.848C19.08 9.984 17.352 6.852 17.352 6.852C15.624 5.556 13.98 5.592 13.98 5.592L13.812 5.784C15.852 6.408 16.8 7.308 16.8 7.308C13.9495 5.7457 10.6011 5.74542 7.836 6.96C7.392 7.164 7.128 7.308 7.128 7.308C7.128 7.308 8.124 6.36 10.284 5.736L10.164 5.592C10.164 5.592 8.52 5.556 6.792 6.852C6.792 6.852 5.064 9.984 5.064 13.848C5.064 13.848 6.072 15.588 8.724 15.672C8.724 15.672 9.168 15.132 9.528 14.676C8.004 14.22 7.428 13.26 7.428 13.26C7.60453 13.3836 7.89563 13.5437 7.92 13.56C9.94547 14.6943 12.8226 15.0659 15.408 13.98C15.828 13.824 16.296 13.596 16.788 13.272C16.788 13.272 16.188 14.256 14.616 14.7C14.976 15.156 15.408 15.672 15.408 15.672C18.06 15.588 19.08 13.848 19.08 13.848Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </a>
              </div>
            </footer>
          </div>
        </div>
      </div>
      <div className="hidden md:block ">
        <div className="flex justify-center bg-[#75AFE9] 2xl:absolute 2xl:bottom-0 2xl:left-[50%] 2xl:translate-x-[-50%]">
          <div className="w-screen max-w-[1000px]">
            <footer className="flex justify-between py-8 text-white">
              <div className="w-[1000px]">
                <p className="text-[18px] text-center absolute left-[50%] translate-x-[-50%]">
                  Copyright © 2023 TDC, LLC All Rights Reserved.
                </p>
              </div>
              <div className="w-[194px] flex justify-around">
                <a
                  className="social-icons__link"
                  href="https://opensea.io/collection/danglydoodads"
                  target="_blank"
                  rel="norefferer"
                >
                  <svg
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_2825_21)">
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M12.1008 0.480483C5.65896 0.426723 0.426723 5.65896 0.480483 12.1008C0.534243 18.3564 5.64552 23.4677 11.8992 23.5195C18.341 23.5752 23.5752 18.341 23.5195 11.8992C23.4677 5.64552 18.3564 0.534243 12.1008 0.480483ZM8.85744 6.63337L8.85766 6.63365L5.44752 12.5333H9.11496C9.63672 11.7382 9.94008 10.7858 9.94008 9.76321C9.94008 8.58181 9.53457 7.494 8.85766 6.63365L8.85768 6.63361L8.85744 6.63337ZM19.9678 13.9507C20.0136 13.9313 20.04 13.889 20.04 13.8396L20.0402 13.8401V13.0783C20.0402 13.0008 19.9644 12.9427 19.8886 12.9638C19.8886 12.9638 16.265 13.7962 16.2228 13.8084C16.1803 13.8206 16.1645 13.8454 16.1645 13.8454C15.7975 14.3374 15.0254 15.1536 14.5951 15.1536H12.599V13.8434H14.1895C14.4168 13.8434 14.6338 13.7518 14.7907 13.5895C15.607 12.7433 16.0795 11.7365 16.0795 10.6555C16.0795 8.81304 14.7024 7.18368 12.5988 6.2016V5.32176C12.5988 4.94256 12.2921 4.63584 11.9129 4.63584C11.5337 4.63584 11.227 4.94256 11.227 5.32176V5.6868C10.638 5.514 10.0138 5.38344 9.36144 5.3076C10.4405 6.48 11.1 8.04768 11.1 9.7668C11.1 11.3078 10.5727 12.7236 9.6876 13.8451H11.227V15.157H8.9736C8.66832 15.157 8.4216 14.91 8.4216 14.605V14.0318C8.4216 13.9313 8.34048 13.8485 8.23824 13.8485H5.26728C5.2092 13.8485 5.15976 13.8962 5.15976 13.9543C5.15808 16.301 7.01472 18.0626 9.23472 18.0626H15.503C16.6446 18.0626 17.3066 16.951 17.9447 15.8794C18.1464 15.5407 18.3457 15.206 18.557 14.9117C18.8993 14.4374 19.7191 14.0566 19.9678 13.9507Z"
                        fill="currentColor"
                      ></path>
                    </g>
                    <defs>
                      <clipPath id="clip0_2825_21">
                        <rect width="24" height="24" fill="white"></rect>
                      </clipPath>
                    </defs>
                  </svg>
                </a>

                <a
                  className="social-icons__link"
                  href="https://twitter.com/danglydoodads"
                  target="_blank"
                  rel="norefferer"
                >
                  <svg
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M18.244 2.25H21.552L14.325 10.51L22.827 21.75H16.17L10.956 14.933L4.99003 21.75H1.68003L9.41003 12.915L1.25403 2.25H8.08003L12.793 8.481L18.244 2.25ZM17.083 19.77H18.916L7.08403 4.126H5.11703L17.083 19.77Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </a>

                <a
                  className="social-icons__link"
                  href="https://discord.gg/XU7UfZGgcx"
                  target="_blank"
                  rel="norefferer"
                >
                  <svg
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15.432 11.4C15.432 12.132 14.892 12.732 14.208 12.732C13.536 12.732 12.984 12.132 12.984 11.4C12.984 10.668 13.524 10.068 14.208 10.068C14.892 10.068 15.432 10.668 15.432 11.4ZM9.828 10.068C9.144 10.068 8.604 10.668 8.604 11.4C8.604 12.132 9.156 12.732 9.828 12.732C10.512 12.732 11.052 12.132 11.052 11.4C11.064 10.668 10.512 10.068 9.828 10.068ZM22.5 2.472V24C19.4768 21.3284 20.4437 22.2127 16.932 18.948L17.568 21.168H3.96C2.604 21.168 1.5 20.064 1.5 18.696V2.472C1.5 1.104 2.604 0 3.96 0H20.04C21.396 0 22.5 1.104 22.5 2.472ZM19.08 13.848C19.08 9.984 17.352 6.852 17.352 6.852C15.624 5.556 13.98 5.592 13.98 5.592L13.812 5.784C15.852 6.408 16.8 7.308 16.8 7.308C13.9495 5.7457 10.6011 5.74542 7.836 6.96C7.392 7.164 7.128 7.308 7.128 7.308C7.128 7.308 8.124 6.36 10.284 5.736L10.164 5.592C10.164 5.592 8.52 5.556 6.792 6.852C6.792 6.852 5.064 9.984 5.064 13.848C5.064 13.848 6.072 15.588 8.724 15.672C8.724 15.672 9.168 15.132 9.528 14.676C8.004 14.22 7.428 13.26 7.428 13.26C7.60453 13.3836 7.89563 13.5437 7.92 13.56C9.94547 14.6943 12.8226 15.0659 15.408 13.98C15.828 13.824 16.296 13.596 16.788 13.272C16.788 13.272 16.188 14.256 14.616 14.7C14.976 15.156 15.408 15.672 15.408 15.672C18.06 15.588 19.08 13.848 19.08 13.848Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </a>
              </div>
            </footer>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
