import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Search from "./Search/Search";

export default function Items(props) {

  const handleSearch = (e) => {
    const results = props.items.filter((item) =>
      item.title.toLowerCase().includes(e.target.value.toLowerCase())
    )
    setSearchResult(results)
    setApplySort(true)
  }
  return (
    <div class=" bg-gradient-to-t from-gray-100 to-gray-400">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-items-center mx-5 drop-shadow-2xl m-2">
        {props.items.map(item => {
          return (
            <div className="m-4 transition ease-in-out delay-150 hover:-translate-y-1 bg-slate-100 hover:scale-105 duration-300  hover:cursor-pointer max-w-sm rounded-2xl overflow-hidden shadow-lg">
          <Link key={item.id} to={`/items/${item.id}`}>
            <h4 class="text-2xl font-bold"> {item.title}</h4>
            <img src={item.img_url} alt={item.title} />
              </Link>
            </div>
          )    
        })}
      </div>
    </div>
  )
}