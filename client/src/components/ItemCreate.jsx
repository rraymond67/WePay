import { useState } from "react";

export default function ItemCreate(props) {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [price, setPrice] = useState(0)
  const [img_url, setImg_url] = useState('')
  
  return (
    <form onSubmit={(e) => {
      e.preventDefault()
      const item = { title, description, price, img_url }
    }}
  )

}