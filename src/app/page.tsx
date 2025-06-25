"use client";

import { useState } from "react";
import { FaTwitter, FaDiscord, FaMedium, FaTelegram } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-start p-6">
      {/* Header */}
      <header className="w-full p-4 rounded-lg shadow-lg flex justify-between items-center">
        <Image src="/images/puffcat-logo.png" width={100} height={100} alt="Pika Icon" className="" />
        <div className="flex space-x-4">
          <Link href="#" className="bg-neutral-800 text-white px-4 py-2 rounded">Stake</Link>
          <Link href="" className="bg-neutral-800 text-white px-4 py-2 rounded">Community</Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="mt-6 w-full max-w-4xl">
        {/* Hero Section */}
        <section className="flex flex-col items-center text-white p-6 rounded-lg text-center relative">
          <h1 className="text-7xl text-yellow-500 md:9xl font-bold mb-4">PUFFCAT</h1>
          <Image src="/images/puffcat-logo.png" width={200} height={200} alt="Pika Hero" className="w-64 h-64" />
          <p className="text-lg">
            Ready for PuffCat Pumps? It&apos;s time for the big boss: PuffCat to flip dogs and frogs!
          </p>
          <div className="flex justify-center space-x-4 mt-4">
            <button className="bg-blue-800 text-white px-4 py-2 rounded">Buy Now</button>
            <button className="border-2 border-blue-800 px-4 py-2 rounded">Chart</button>
          </div>
        </section>

        {/* Fairness Section */}
        <section className="bg-gray-800 p-6 rounded-lg mt-6 flex flex-col md:flex-row items-center space-x-6">
          <Image src="/images/puffcat-logo.png" width={200} height={200} alt="PuffCat Fairness" className="h-48 w-48" />
          <div>
            <h2 className="text-3xl font-bold mb-2">PUFFCAT'S FAIRNESS</h2>
            <p className="text-lg">
              PuffCat is tired of watching everyone degenerate with the endless derivative DoggyFroggy coins. Dogs
              and frogs have had their day. It&apos;s time for the most paradable creature in the world to take his reign as
              king of the memes.
            </p>
            <p className="text-lg mt-2">
              Launch is here to give memecoin fans some parody, no blacklist, no free tokens, no presale, zero taxes,
              100% liquidity pooled, LP Burnt and Contract Renounced. PIKA is a coin for the people, forever. Fueled by
              pure Pika Power, let PIKA show you the way.
            </p>
          </div>
        </section>

        {/* Roadmap Section */}
        <section className="text-white p-6 rounded-lg mt-6 text-center">
          <h2 className="text-4xl text-yellow-500 font-bold mb-4">ROADMAP</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-gray-800 p-4 rounded-lg">
              <h3 className="text-xl">PHASE 1</h3>
              <p>1M Market Cap</p>
              <p>PuffCat Socials Setup</p>
              <p>Smart Contract Deployment</p>
              <p>Listing on PancakeSwap</p>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg">
              <h3 className="text-xl">PHASE 2</h3>
              <p>Website Development & Release</p>
              <p>Contests and Giveaways</p>
              <p>Listing on GekoTerminal & voting platforms</p>
              <p>Partnership with Cat Brands</p>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg">
              <h3 className="text-xl">PHASE 3</h3>
              <p>BSCscan update</p>
              <p>Listing on DEXTools & DexScreener</p>
              <p>CoinGecko & CoinMarketCap Applications</p>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg">
              <h3 className="text-xl">PHASE 4</h3>
              <p>Staking platform launch</p>
              <p>Community Onboarding</p>
              <p>Game Teasers/NFT Drops</p>
              <p>More Cat Partnerships</p>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg">
              <h3 className="text-xl">PHASE 5</h3>
              <p>CEX Listing</p>
              <p>Cross Chain Exploration</p>
              <p>Merchs, Games and IRL Events</p>
              <p>Governance Voting on future</p>
            </div>
          </div>
        </section>

        {/* Tokenomics Section */}
        <section className="bg-gray-800 p-6 rounded-lg mt-6 text-center">
          <h2 className="text-4xl font-bold mb-4">TOKENOMICS</h2>
          <p className="text-lg">
            Supply: 420,690,000,000,000 PIKA / Symbol: PIKA
          </p>
          <p className="text-lg mt-2">0% TAXES - LP BURNT - CONTRACT RENOUNCED</p>
          <p className="text-lg mt-2">Ca: 0xA9D54F7EB9F8880C5C9F1A9F07AAdC1d</p>
        </section>

        {/* Footer */}
        <footer className="bg-yellow-700 p-4 rounded-lg mt-6 flex justify-between items-center">
          <div className="flex space-x-4">
            <a href="https://dexscreener.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter className="text-white" />
            </a>
            <a href="https://dextools.io" target="_blank" rel="noopener noreferrer">
              <FaDiscord className="text-white" />
            </a>
            <a href="https://uniswap.org" target="_blank" rel="noopener noreferrer">
              <FaMedium className="text-white" />
            </a>
            <a href="https://etherscan.io" target="_blank" rel="noopener noreferrer">
              <FaTelegram className="text-white" />
            </a>
          </div>
          <p className="text-sm">business@pikaboss.vip</p>
          <p className="text-sm">PikabossPIKA © 2025 All Rights Reserved</p>
        </footer>
      </main>
    </div>
  );
}