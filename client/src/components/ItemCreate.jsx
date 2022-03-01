import { useState } from "react";

export default function ItemCreate(props) {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [price, setPrice] = useState(0)
  const [img_url, setImg_url] = useState('')
  
  const handleCreateItem = async (e) => {
    e.preventDefault()
      const item = { title, description, price, img_url }
      props.handleCreate(item)
  }
  return (
    <div class="px-14 bg-slate-300 grid justify-items-center py-24" >
      <h1> List Item For Sale</h1>
      <form onSubmit={handleCreateItem} class="w-full max-w-lg">
        <div class="flex flex-wrap -mx-300 mb-20"> 
          <div class="w-full px-3 mb-6">
            <input type='text'
              value={title}
              placeholder="Item Tile"
              onChange={(e) => setTitle(e.target.value)}/>
          </div>
          <div class="w-full px-3 mb-6">
          <input
        type='number'
              value={price}
              placeholder="Price"
        onChange={(e) => setPrice(e.target.valueAsNumber)}/>
          </div>

          <div class="w-full px-3 mb-6">
          <input
        type='text'
        value={description}
        placeholder="Description"
        onChange={(e) => setDescription(e.target.value)}/>
          </div>

          <div class="w-full px-3 mb-6">
          <input
        type='text'
              value={img_url}
              placeholder="Add Image"
        onChange={(e) => setImg_url(e.target.value)}/>
          </div>
      
        </div>
      <button class="bg-yellow-500 hover:bg-blue-700 text-white font-bold py-2 px-8 rounded focus:outline-none focus:shadow-outline">Create</button>
      </form>
    </div>
  )

}