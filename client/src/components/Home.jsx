import React from 'react'
import Wepay from '../images/wepay.jpeg'
import { Link } from 'react-router-dom'

export default function Home(props) {
  return (
    <div className="w-full border-blue-700">
    <div className="flex flex-wrap items-center px-20 py-20 md:flex-nowrap">
        <div className="flex flex-col justify-center flex-grow w-full ">
          <img className="-mt-20 scale-50" src={Wepay}></img>
        <h1 class="mt-20 w-full text-3xl text-center text-red-900">Welcome to WePay. Your favorate bidding destination for everything and anything E-commerce.
        Sign up to become one of our many vendors who choose this website to sell there items to the highest bidder.
        Log in to place your bid on the item you want for a chance to win</h1>
          <button class="bg-green-500 hover:bg-blue-700 text-white font-bold py-2 px-8 rounded focus:outline-none focus:shadow-outline">
          <Link to="/items">BUY</Link>
        </button>
          <button to="/items" class="bg-yellow-500 hover:bg-blue-700 text-white font-bold py-2 px-8 rounded focus:outline-none focus:shadow-outline">
            {props.currentUser}?
            <Link to="/items/create">SELL</Link>
            :
            <Link to="/register">SELL</Link>
          </button>
        </div>
    </div>
    </div>
  )
}
