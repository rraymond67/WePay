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
      props.handleCreate(item)
    }}>
      <input
        type='text'
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type='number'
        value={price}
        onChange={(e) => setPrice(e.target.valueAsNumber)}
      />
      <input
        type='text'
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <input
        type='text'
        value={img_url}
        onChange={(e) => setImg_url(e.target.value)}
      />
      <button>Create</button>
    </form>
  )

}