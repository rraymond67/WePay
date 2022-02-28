import React from "react";
import { Link } from "react-router-dom";

export default function Items(props) {
  return (
    <div>
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