import React from "react";
import { Link } from "react-router-dom";

export default function Items(props) {
  return (
    <div class="bg-gradient-to-t from-gray-100 to-gray-400">
      { props.currentUser &&
        <Link class="py-2 px-3 text-sm font-medium text-center text-slate-800 rounded-lg hover:bg-slate-200 dark:bg-slate-200 dark:hover:bg-slate-400 dark:focus:ring-red-800" to='/items/create'>List an Item!</Link>
      }
      {props.items.map(item => (
        <Link key={item.id} to={`/items/${item.id}`}>
          <h4>{item.title}</h4>
          <img src={item.img_url} alt={item.title} />
          {/* <p>{item.description}</p> */}
        </Link>
        
      ))}
    </div>
  )
}