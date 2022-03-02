import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getItemBids, createBid, deleteBid } from "../services/bids";
import Bids from "./Bids";
import BidCreate from "./BidCreate";

export default function ItemDetail(props) {
  const { id } = useParams()
  
  const [item, setItem] = useState({})
  const [bids, setBids] = useState([])
  const [toggle, setToggle] = useState(true)

  useEffect(() => {
    const fetchItem = props.items.find(item => item.id === parseInt(id))
    const fetchBids = async () => {
      const bids = await getItemBids(id)
      setBids(bids)
    }
    fetchBids()
    setItem(fetchItem)
  }, [id, props.items, toggle])

  const handleBidCreate = async (formData) => {
    await createBid(id, formData)
    setToggle(previous => !previous)
  }
  const handleBidDelete = async (bid_id) => {
    await deleteBid(id, bid_id)
    setToggle(previous => !previous)
  }

  return (
    <div>
      {item?.id ? 
        <>
          <div className="grid grid-cols-1 justify-items-center drop-shadow-2xl m-2">
            <img class="scale-75" src={item.img_url} alt={item.title}/>
            <h2>{item.title}</h2>
            <h3>$ {item.price} Seller: {item.user_id}</h3>
            <p>{item.description}</p>
          </div>
            
            
            {props.currentUser?.id === item.user_id ?
              <>
                  <Link to={`/items/${item.id}/edit`}>
                    <button>Edit</button>
                  </Link>
                <button onClick={() => props.handleDelete(item.id)}>Delete</button>
              </>
              :
            null}
          
            <BidCreate handleBidCreate={ handleBidCreate}/>
            <Bids
              currentUser={props.currentUser}
              bids={bids}
              handleBidDelete={handleBidDelete}
            />
          </>
          :
          <h3>Sorry, no item found.</h3>
      }
    </div>
  )

}