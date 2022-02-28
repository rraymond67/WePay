import { getAllItems, createItem, updateItem, deleteItem } from "../services/items";
import { useEffect, useState } from "react";
import Items from "./Items";
import ItemCreate from "./ItemCreate";
import ItemDetail from "./ItemDetail";
import ItemEdit from "./ItemEdit";

export default function ItemsContainer(props) {
  const [items, setItems] = useState([])
  const [toggle, setToggle] = useState(true)
  const navigate = useNavigate()

  useEffect(() => {
    const fetchItems = async () => {
      const items = await getAllItems()
      setItems(items)
    }
    fetchItems()
  }, toggle)

  const handleDelete = async (id) => {
    await deleteItem(id)
    setToggle(prevToggle => !prevToggle)
    navigate('/items')
  }

  const handleCreate = async (formData) => {
    await createItem(formData)
    setToggle(prevToggle => !prevToggle)
    navigate('/items')
  }

  const handleEdit = async (id, formData) => {
    await updateItem(id, formData)
    setToggle(prevToggle => !prevToggle)
    navigate(`/items/${id}`)
  }
  
  return (
    <div>
      <Routes>
        <Route path='/' element={
          <Items
            items={items}
            currentUser={props.currentUser}
          />
        } />
        <Route path='/:id' element={
          <ItemDetail
            items={items}
            handleDelete={handleDelete}
            currentUser={props.currentUser}
          />
        } />
        <Route path='/create' element={
          <ItemCreate
            handleCreate={handleCreate}
          />
        } />
        <Route path='/:id/edit' element={
          <ItemEdit
            handleEdit={handleEdit}
            items={items}
          />
        } />
      </Routes>
    </div>
  )
}