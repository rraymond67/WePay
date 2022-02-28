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
        onChange={(e) => setTitle(e.target.value)}
        value={title}
      />
      <input
        type='number'
        onChange={(e) => setPrice(e.target.valueAsNumber)}
        value={price}
      />
      <input
        type='text'
        onChange={(e) => setDescription(e.target.value)}
        value={description}
      />
      <input
        type='text'
        onChange={(e) => setImg_url(e.target.value)}
        value={img_url}
      />
      <button>Create</button>
    </form>
  )

}