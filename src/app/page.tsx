"use client";

import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-blue-950 text-white flex flex-col items-center justify-start">
      {/* Header */}
      <header className="w-full px-8 py-4 rounded-lg flex justify-between items-center">
        <Image src="/images/puffcat-logo.png" width={75} height={75} alt="Pika Icon" className="" />
        <div className="flex space-x-4 text-black">
          <Link href="#" className="bg-white px-4 py-2 rounded">Stake</Link>
          <Link href="" className="bg-white  px-4 py-2 rounded">Community</Link>
        </div>

      </header>

      {/* Main Content */}
      <main className="mt-8 w-full">
        {/* Hero Section */}
        <section className="flex flex-col md:mx-16 items-center text-white rounded-lg text-center relative">
          <h1 className="text-7xl text-yellow-500 md:text-9xl mb-4">PUFFCAT</h1>
          <div className="flex flex-col md:flex-row items-center md:ml-[400px]">
            <Image src="/images/puffcat-logo.png" width={200} height={200} alt="Pika Hero" className="w-86 h-86" />
            <div className="flex flex-col items-center md:items-start md:ml-8">
              <p className="text-lg text-center md:text-left">
                Ready for PuffCat Pumps? It&apos;s time for the big boss: PuffCat to flip dogs and frogs!
              </p>
              <div className="flex justify-center space-x-4 mt-4">
                <button className="font-bold bg-blue-400 text-white px-8 py-2 rounded">Buy Now</button>
                <button className="font-bold border-2 border-blue-400 px-8 py-2 rounded">Chart</button>
              </div>
            </div>
          </div>

        </section>

        {/* Fairness Section */}
        <section className="bg-blue-700 border-blue-400 border-r-8 border-b-8 rounded-2xl p-4 md:p-8 mt-24 mx-4 md:mx-8 flex flex-col md:flex-row items-center gap-4 md:gap-8">
          <Image src="/images/puffcat-logo.png" width={200} height={200} alt="PuffCat Fairness" className="h-48 w-48" />
          <div className="flex flex-col text-center md:text-left">
            <h2 className="text-3xl mb-2">PUFFCAT&apos;S FAIRNESS</h2>
            <p className="text-lg">
              In a sea of forgettable tokens and chaotic coin launches, PuffCat prowls in with style, substance, and sass.
              This isn&apos;t just another cat meme coin: this is a whole feline-powered movement. Built to entertain, reward,
              and engage, PuffCat Coin merges the unstoppable force of meme culture with smart tokenomics and true
              community spirit.
            </p>
            <p className="text-lg mt-2">
              With a max supply of 420 million tokens, anti-whale limits, and a fair launch model,
              PuffCat is engineered for long-term sustainability and massive viral potential. Whether you&apos;re here to stake,
              trade, meme, or game, you&apos;re in the right litter box.
            </p>
          </div>
        </section>

        {/* Roadmap Section */}
        <section className="py-32 text-white p-6 rounded-lg mt-6 text-center">
          <h2 className="text-6xl md:text-8xl pb-8 text-yellow-500 mb-4">ROADMAP</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:justify-center">
            <div className="text-lg bg-blue-800 border-blue-300 border-t-2 border-l-2 border-r-6 border-b-6 rotate-355 p-4 rounded-lg">
              <h3 className="text-2xl pb-4">PHASE 1</h3>
              <p>1M Market Cap</p>
              <p>PuffCat Socials Setup</p>
              <p>Smart Contract Deployment</p>
              <p>Listing on PancakeSwap</p>
            </div>
            <div className="bg-blue-800 border-blue-300 border-t-2 border-l-2 border-r-6 border-b-6 rotate-5 p-4 rounded-lg">
              <h3 className="text-2xl pb-4">PHASE 2</h3>
              <p>Website Development & Release</p>
              <p>Contests and Giveaways</p>
              <p>Listing on GekoTerminal & voting platforms</p>
              <p>Partnership with Cat Brands</p>
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
              <p>More Cat Partnerships</p>
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
        <section className="bg-blue-800 flex flex-col items-center  py-32 rounded-lg mt-6 text-center">
          <h1 className="text-6xl pb-8 md:text-8xl text-yellow-500">TOKENOMICS</h1>
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
              <p className="flex flex-col gap-2">
                <span>Contract Address:</span>
                <span className="font-bold md:text-xl">0x14a8d0AC8Fc456899F2DD33C3f4E32403A78126c</span>
              </p>
            </div>
            <div className="grid grid-cols-2 text-black gap-4 text-xl md:grid-cols-4 mt-4">
              <div className="bg-yellow-500 border-t-2 border-l-2 border-r-4 border-b-4 p-2 rounded-md">
                <h1>DexScreener</h1>
              </div>
              <div className="bg-yellow-500 border-t-2 border-l-2 border-r-4 border-b-4 p-2 rounded-md">
                <h1>DexTools</h1>
              </div>
              <div className="bg-yellow-500 border-t-2 border-l-2 border-r-4 border-b-4 p-2 rounded-md">
                <h1>BSCscan</h1>
              </div>
              <div className="bg-yellow-500 border-t-2 border-l-2 border-r-4 border-b-4 p-2 rounded-md">
                <h1>Gecko Terminal</h1>
              </div>
            </div>
          </div>
        </section>

        <section className="flex py-16 flex-col items-center text-center px-8 md:px-16 text-xl">
          <h1 className="text-6xl pb-4 md:text-8xl text-yellow-500">HOW TO BUY PUFFCAT</h1>
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
          <h1 className="text-6xl md:text-8xl pb-4 text-yellow-500">COMMUNITY FIRST</h1>
          <p className="pb-4">PuffCat isn&apos;t VC-backed or whale-controlled. It&apos;s meme-powered and people-led. Every feature, every drop,
            every decision is about making the community laugh, earn, and roar louder.</p>
          <p className="font-bold text-2xl">FOLLOW THE CAT. HOLD THE BAG. MEME THE MOON.</p>
        </section>

        {/* Footer */}
        <footer className="p-4 rounded-lg mt-6 flex flex-col justify-between items-center">
          <div className="w-full mb-4 flex flex-row justify-between items-center">
            <Link href="/">
              <Image src="/images/puffcat-logo.png" alt="puffcat logo" width={50} height={50} className="" />
            </Link>
            <div className="flex gap-2">
              <p>DexScreener</p>
              <p>DEXTools</p>
              <p>BSCScan</p>
            </div>
          </div>
          <p>PuffCat Token 2025 | All Rights Reserved</p>
        </footer>
      </main>
    </div>
  );
}