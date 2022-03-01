import React from "react";
import { Link } from "react-router-dom";

export default function Items(props) {
  return (
    <div className="bg-gradient-to-r from-teal-200 to-teal-500">
      { props.currentUser &&
        <Link to='/items/create'>List an Item!</Link>
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