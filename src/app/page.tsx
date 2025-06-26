"use client";

import Image from "next/image";
import Link from "next/link";
import { FaTelegram, FaXTwitter } from "react-icons/fa6";
import { FiCopy } from "react-icons/fi";

export default function Home() {

  const fullAddress = "0x14a8d0AC8Fc456899F2DD33C3f4E32403A78126c";
  const shortAddress = `${fullAddress.slice(0, 10)}...${fullAddress.slice(-10)}`;
  const handleCopy = () => {
    navigator.clipboard.writeText(fullAddress);
    alert("Address copied!");
  };

  return (
    <div className="min-h-screen bg-blue-950 text-white flex flex-col items-center justify-start">
      {/* Header */}
      <header className="w-full px-8 py-4 rounded-lg flex justify-between items-center">
        <Image src="/images/puffcat-logo.png" width={75} height={75} alt="Pika Icon" className="" />
        <div className="flex space-x-4 text-black">
          <a href="https://x.com/puff_cattoken"><div className="bg-white border-t border-l border-b-2 border-r-2 p-2" ><FaXTwitter size={20} /></div></a>
          <a href="https://t.me/puffcatchannel"><div className="bg-white border-t border-l border-b-2 border-r-2 p-2" ><FaTelegram size={20} /></div></a>
        </div>

      </header>

      {/* Main Content */}
      <main className="mt-8 w-full">
        {/* Hero Section */}
        <section className="flex flex-col px-8 md:px-16 items-center text-white rounded-lg text-center relative">
          <h1 className="text-7xl text-yellow-500 md:text-9xl mb-4">PUFFCAT</h1>
          <div className="flex flex-col md:flex-row items-center md:ml-[400px]">
            <Image src="/images/puffcat-img.png" width={200} height={200} alt="Pika Hero" className="w-94 h-72 md:w-[500px] md:h-[400px]" />
            <div className="flex flex-col items-center md:items-start md:ml-8">
              <p className="text-lg text-center md:text-left">
                Ready for PuffCat Pumps? It&apos;s time for the big boss: PuffCat to flip dogs and frogs!
              </p>
              <div className="flex justify-center space-x-4 mt-4">
                <a href="https://pancakeswap.finance/?outputCurrency=0x14a8d0ac8fc456899f2dd33c3f4e32403a78126c">
                  <button className="font-bold bg-blue-400 text-white px-8 py-2 rounded">
                    Buy now
                  </button></a>
                <a href="https://dexscreener.com/bsc/0xfc5bf2c8d2dbf6b72ffd391ea4c1debe8c35422a">
                  <button className="font-bold border-2 border-blue-400 text-white px-8 py-2 rounded">
                    Chart
                  </button></a>
              </div>
            </div>
          </div>

        </section>

        {/* Fairness Section */}
        <section className="bg-blue-700 border-blue-400 border-r-8 border-b-8 rounded-2xl p-4 md:p-8 mt-24 mx-8 md:mx-16 flex flex-col md:flex-row items-center gap-4 md:gap-8">
          <Image src="/images/puffcat-logo.png" width={200} height={200} alt="PuffCat Fairness" className="h-48 w-48" />
          <div className="flex flex-col text-center md:text-left">
            <h2 className="text-3xl text-yellow-500 mb-2">PUFFCAT&apos;S FAIRNESS</h2>
            <p className="text-lg">
              PUFFCAT is a fun, transparent token where the community leads the project&apos;s direction with
              memes, games, giveaways, burns, and a growing culture of cat lovers & crypto fans.
              No fake promises. No over-engineered utility. Just community, memes, and fun.
            </p>
            <p className="text-lg mt-2">
              Follow the pawprints... join the movement of a safe community driven meme token with safe contract and
              100% lp locked for 1yr
            </p>
          </div>
        </section>

        {/* Roadmap Section */}
        <section className="py-32 mx-8 md:mx-16 text-white px-8 rounded-lg mt-16 text-center">
          <h2 className="text-4xl md:text-8xl pb-8 text-yellow-500 mb-4">ROADMAP</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:justify-center">
            <div className="text-lg bg-blue-800 border-blue-300 border-t-2 border-l-2 border-r-6 border-b-6 rotate-355 p-4 rounded-lg">
              <h3 className="text-2xl pb-4">PHASE 1</h3>
              <p>PuffCat Socials Setup</p>
              <p>Smart Contract Deployment</p>
              <p>Listing on PancakeSwap</p>
            </div>
            <div className="bg-blue-800 border-blue-300 border-t-2 border-l-2 border-r-6 border-b-6 rotate-5 p-4 rounded-lg">
              <h3 className="text-2xl pb-4">PHASE 2</h3>
              <p>Website Development & Release</p>
              <p>Listing on GekoTerminal & voting platforms</p>
              <p>Listing on NTM.ai and BSC trending</p>
              <p>Contests and Giveaways</p>
            </div>
            <div className="bg-blue-800 border-blue-300 border-t-2 border-l-2 border-r-6 border-b-6 rotate-350 p-4 rounded-lg">
              <h3 className="text-2xl pb-4">PHASE 3</h3>
              <p>BSCscan update</p>
              <p>Listing on DEXTools & DexScreener</p>
              <p>CoinGecko & CoinMarketCap Applications</p>
            </div>
            <div className="bg-blue-800 border-blue-300 border-t-2 border-l-2 border-r-6 border-b-6 rotate-5 p-4 rounded-lg">
              <h3 className="text-2xl pb-4">PHASE 4</h3>
              <p>Staking platform launch</p>
              <p>Community Onboarding</p>
              <p>Game Teasers/NFT Drops</p>
              <p>Partnership with Cat Brands</p>
            </div>
            <div className="bg-blue-800 border-blue-300 border-t-2 border-l-2 border-r-6 border-b-6 rotate-355 p-4 rounded-lg">
              <h3 className="text-2xl pb-4">PHASE 5</h3>
              <p>CEX Listing</p>
              <p>Cross Chain Exploration</p>
              <p>Merchs, Games and IRL Events</p>
              <p>Governance Voting on future</p>
            </div>
          </div>
        </section>

        {/* Tokenomics Section */}
        <section className="bg-blue-800 flex flex-col items-center  py-32 rounded-lg text-center">
          <h1 className="text-4xl pb-8 md:text-8xl text-yellow-500">TOKENOMICS</h1>
          <div className="flex flex-col items-center">
            <p className="flex gap-2 items-center text-xl">
              <span>Supply:</span>
              <span className="font-bold text-2xl">420,000,000,000</span>
            </p>
            <p className="flex gap-2 items-center text-xl">
              <span>Name:</span>
              <span className="font-bold text-2xl">PUFFCAT</span>
            </p>
            <p className="flex items-center gap-2 text-xl">
              <span>Taxes:</span>
              <span className="font-bold text-2xl">4% Buy / 4% Sell</span>
            </p>

            <div className="p-4 md:p-8 mt-4 bg-yellow-500 text-black border-t-2 border-l-2 border-b-6 border-r-6 rounded-lg">
              <p className="flex items-center gap-2 font-mono">
                {/* Mobile (hidden on md and up) */}
                <span className="font-bold text-lg md:hidden">{shortAddress}</span>

                {/* Desktop (hidden below md) */}
                <span className="font-bold text-sm hidden md:inline md:text-xl">{fullAddress}</span>

                <button
                  onClick={handleCopy}
                  className="hover:opacity-70"
                  aria-label="Copy address"
                >
                  <FiCopy size={20} />
                </button>
              </p>
            </div>
            <div className="grid grid-cols-2 text-black gap-4 text-xl md:grid-cols-4 mt-4">
              <div className="bg-yellow-500 border-t-2 border-l-2 border-r-4 border-b-4 p-2 rounded-md">
                <a href="https://dexscreener.com/bsc/0xfc5bf2c8d2dbf6b72ffd391ea4c1debe8c35422a">
                  <div className="flex gap-2 items-center justify-center">
                    <Image src="/images/dexscreener-black.png" width={20} height={20} alt="dexscreener" />
                    <h1>DexScreener</h1>
                  </div>
                </a>
              </div>
              <div className="bg-yellow-500 border-t-2 border-l-2 border-r-4 border-b-4 p-2 rounded-md">
                <a href="https://www.dextools.io/app/en/bnb/pair-explorer/0xfc5bf2c8d2dbf6b72ffd391ea4c1debe8c35422a?t=1750926169211">
                  <div className="flex gap-2 items-center justify-center">
                    <Image src="/images/dextools-black.png" width={20} height={20} alt="dextools" />
                    <h1>DEXTools</h1>
                  </div>
                </a>
              </div>
              <div className="bg-yellow-500 border-t-2 border-l-2 border-r-4 border-b-4 p-2 rounded-md">
                <a href="https://bscscan.com/token/0x14a8d0ac8fc456899f2dd33c3f4e32403a78126c">
                  <div className="flex gap-2 items-center justify-center">
                    <Image src="/images/bscscan-black.png" width={20} height={20} alt="bscscan" />
                    <h1>BSCscan</h1>
                  </div>
                </a>
              </div>
              <div className="bg-yellow-500 border-t-2 border-l-2 border-r-4 border-b-4 p-2 rounded-md">
              <a href="https://www.geckoterminal.com/bsc/pools/0xfc5bf2c8d2dbf6b72ffd391ea4c1debe8c35422a">
                  <div className="flex gap-2 items-center justify-center">
                    <h1>Gecko Terminal</h1>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="flex py-16 flex-col items-center text-center px-8 md:px-16 text-xl">
          <h1 className="text-4xl pb-4 md:text-8xl text-yellow-500">HOW TO BUY PUFFCAT</h1>
          <div className="flex flex-col gap-4">
            <div className="bg-blue-700 border-blue-300 border-t-2 border-l-2 border-r-4 border-b-4 p-2 rounded-md">
              <p>Add/Buy Binance Smart Chain into your wallet (e.g. MetaMask, TrustWallet)</p>
            </div>
            <div className="bg-blue-700 border-blue-300 border-t-2 border-l-2 border-r-4 border-b-4 p-2 rounded-md">
              <p>Go to the PancakeSwap DEX in the browser</p>
            </div>
            <div className="bg-blue-700 border-blue-300 border-t-2 border-l-2 border-r-4 border-b-4 p-2 rounded-md">
              <p>Paste the PUFFCAT contract address in the output field</p>
            </div>
            <div className="bg-blue-700 border-blue-300 border-t-2 border-l-2 border-r-4 border-b-4 p-2 rounded-md">
              <p>Set the slippage tax between 5% to 6%</p>
            </div>
            <div className="bg-blue-700 border-blue-300 border-t-2 border-l-2 border-r-4 border-b-4 p-2 rounded-md">
              <p>Click on the Swap button and confirm yout transaction</p>
            </div>
          </div>
        </section>

        <section className="bg-blue-800 text-lg flex flex-col items-center text-center py-16 px-8 md:px-16">
          <h1 className="text-4xl md:text-8xl pb-4 text-yellow-500">COMMUNITY FIRST</h1>
          <p className="pb-4">PuffCat isn&apos;t VC-backed or whale-controlled. It&apos;s meme-powered and people-led. Every feature, every drop,
            every decision is about making the community laugh, earn, and roar louder.</p>
          <p className="font-bold text-2xl">FOLLOW THE CAT. HOLD THE BAG. MEME THE MOON.</p>
        </section>

        {/* Footer */}
        <footer className="px-8 md:px-32 rounded-lg mt-12 mb-8 flex flex-col justify-between items-center">
          <div className="w-full mb-4 flex flex-row justify-between items-center">
            <Link href="/">
              <Image src="/images/puffcat-logo.png" alt="puffcat logo" width={50} height={50} className="" />
            </Link>
            <div className="flex gap-2 md:gap-4 items-center">
              <a href="https://dexscreener.com/bsc/0xfc5bf2c8d2dbf6b72ffd391ea4c1debe8c35422a">
                <Image src="/images/dexscreener-b.png" alt="dexscreener" width={35} height={35} className="w-8 h-8 md:w-10 md:h-10" /></a>
              <a href="https://www.dextools.io/app/en/bnb/pair-explorer/0xfc5bf2c8d2dbf6b72ffd391ea4c1debe8c35422a?t=1750926169211">
                <Image src="/images/dextools-b.png" alt="dextools" width={35} height={35} className="w-8 h-9 md:w-10 md:h-12" /></a>
              <a href="https://bscscan.com/token/0x14a8d0ac8fc456899f2dd33c3f4e32403a78126c">
                <Image src="/images/bscscan.png" alt="bscscan" width={35} height={35} className="w-8 h-8 md:w-10 md:h-10" /></a>
            </div>
          </div>
          <p>PuffCat Token 2025 | All Rights Reserved</p>
        </footer>
      </main>
    </div>
  );
}