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

  return (
    <form onSubmit={(e) => {
      e.preventDefault()
      const item = { title, price, description, img_url }
      props.handleEdit(id, item)
    }}>
      <input
        type='text'
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type='text'
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        />
      <input
        type='number'
        value={price}
        onChange={(e) => setPrice(e.target.valueAsNumber)}
      />
      <input
        type='text'
        value={img_url}
        onChange={(e) => setImg_url(e.target.value)}
      />
      <button>Save</button>
    </form>
  )

}