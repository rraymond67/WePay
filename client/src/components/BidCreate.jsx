import {useState} from 'react'

export default function BidCreate(props) {
  const [amount, setAmount] = useState(0)

  return (
    <div className="flex flex-col items-center mb-11" >
      {props.currentUser ?
    <form onSubmit={(e) => {
      e.preventDefault()
      const bid = {amount}
      props.handleBidCreate(bid)
    }}>
      
      <input type='number' value={amount} onChange={(e) => setAmount(e.target.valueAsNumber)} />
      <button class="mb-30 bg-yellow-500 hover:bg-blue-700 text-white font-bold py-2 px-8 rounded focus:outline-none focus:shadow-outline">Place bid!</button>
        </form>
        :
        null
  }
      
      </div>
  )
}
