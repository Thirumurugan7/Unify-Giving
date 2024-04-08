import React from 'react'
import Bg1 from '../assets/bg1.png'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'


const Home = () => {
  return (
    <div className=" h-screen bg-cover bricolage-font pb-6" style={{ backgroundImage: `url(${Bg1})` }}>
        <div className=" pt-8">
            <Navbar />
            <div className="">
                <div className=" flex justify-center pt-16">
                    <p className=' text-6xl text-white rounded-3xl font-semibold w-fit p-3 px-6' style={{ backgroundColor: '#6200EE'}}>Mint Your NFT</p>
                </div>
                <p className='text-6xl text-gray-900 flex pt-2 justify-center font-semibold'>Become an Early Contributor</p>
                <p className=' text-xl text-gray-900 flex justify-center mx-[22%] pt-6 text-center'>Welcome to the exclusive oppurtunity to mint your NFT and become one of the pioneering contributors to Unify Giving's mission. By minting an NFT, you not only secure proof of your early support but also gain access to special features and benefits as an early adopter</p>
                <div className=" flex justify-center pt-10  text-xl font-semibold space-x-10">
                    <Link to="" className='hover:cursor-pointer border w-fit p-4 px-6 rounded-full transition-transform hover:scale-95 ease-in-out hover:shadow-2xl' style={{ borderColor: '#6200EE', color: '#6200EE' }}> Connect Wallet</Link>
                    <Link to='/mint' className='hover:cursor-pointer border w-fit p-4 px-6 text-white rounded-full transition-transform hover:scale-95 ease-in-out hover:shadow-2xl' style={{ backgroundColor: '#6200EE' }}> Mint your NFT 🡥 </Link>
                </div>
            </div>
        </div>
    </div>
)
}

export default Home