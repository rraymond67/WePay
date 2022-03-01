import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function ItemEdit(props) {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [price, setPrice] = useState(0)
  const [img_url, setImg_url] = useState('')

  const { id } = useParams()
  
  useEffect(() => {
    const fetchItem = props.items.find(item => item.id === parseInt(id)) //parsInt(id) is used to tuen the params {id} which comes up as a string into an integer in order to have a strict equal with items.id which is an intger
    if (fetchItem) {
      setTitle(fetchItem.title)
      setDescription(fetchItem.description)
      setPrice(fetchItem.price)
      setImg_url(fetchItem.img_url)
    }
  }, [id, props.items])

  const handleEdit = async (e) => {
    e.preventDefault()
    const item = { title, price, description, img_url }
    props.handleEdit(id, item)
  }

  return (
    <div class="px-14 bg-slate-300 grid justify-items-center py-24">
      <h1 class="text-2xl font-bold mb-10"> Edit Item</h1>
      <form onSubmit={handleEdit} class="w-full max-w-lg">
        <div class="flex flex-wrap -mx-300 mb-20">
          <div class="w-full px-3 mb-6">
            <input
              type='text'
              value={title}
              onChange={(e) => setTitle(e.target.value)}/>
          </div>
          <div class="w-full px-3 mb-6">
            <input
              type='text'
              value={description}
              onChange={(e) => setDescription(e.target.value)}/>
          </div>
          <div class="w-full px-3 mb-6">
            <input
            type='number'
            value={price}
            onChange={(e) => setPrice(e.target.valueAsNumber)}/>
          </div>
          <div class="w-full px-3 mb-6">
            <input
            type='text'
            value={img_url}
            onChange={(e) => setImg_url(e.target.value)}/>
          </div>
        </div>
      <button class="bg-yellow-500 hover:bg-blue-700 text-white font-bold py-2 px-8 rounded focus:outline-none focus:shadow-outline">Save</button>
      </form>
    </div>
  )

}