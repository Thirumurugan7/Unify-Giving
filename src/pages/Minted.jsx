import React from "react";
import Bg from '../assets/bg.png'
import Navbar from "../components/Navbar";
import MintedImg from '../assets/minted.png';
import { Link } from "react-router-dom";

const Minted = () => {
  return (
    <div
      className=" h-screen bg-cover bricolage-font pb-6"
      style={{ backgroundImage: `url(${Bg})` }}
    >
      <div className=" pt-8">
        <Navbar />
        <div className=" pt-16">
            <p className=" text-5xl flex justify-center font-semibold"> Congratulations on Minting Your NFT! 🚀</p>
            <div className=" flex justify-center">
                <img src={MintedImg} className=" h-96" alt="" />
            </div>
            <div className=" flex justify-center pt-10  text-xl font-semibold space-x-10">
                <Link to="" className='hover:cursor-pointer border w-fit p-4 px-6 rounded-full transition-transform hover:scale-95 ease-in-out hover:shadow-2xl' style={{ borderColor: '#6200EE', color: '#6200EE' }}> Visit Website</Link>
                <Link to='/mint' className='hover:cursor-pointer border w-fit p-4 px-6 text-white rounded-full transition-transform hover:scale-95 ease-in-out hover:shadow-2xl' style={{ backgroundColor: '#6200EE' }}> View your NFT 🡥 </Link>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Minted;
