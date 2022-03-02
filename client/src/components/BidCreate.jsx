import {useState} from 'react'

export default function BidCreate(props) {
  const [amount, setAmount] = useState(0)

  return (
    <div>
      {props.currentUser ?
    <form onSubmit={(e) => {
      e.preventDefault()
      const bid = {amount}
      props.handleBidCreate(bid)
    }}>
      
      <input type='number' value={amount} onChange={(e) => setAmount(e.target.valueAsNumber)} />
      <button>Place bid!</button>
        </form>
        :
        null
  }
      
      </div>
  )
}
