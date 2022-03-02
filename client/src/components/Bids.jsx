import React from 'react'

export default function Bids(props) {
  return (
    <div>
      {props.bids && 
        props.bids.map(bid => (
          <div key={bid.id} class="grid items-center mt-10 grid-cols-2 border-4 bg-green-400 pb-10 mb-10">
            <h4 class="text-xl text-black-900">{bid.user.username} is bidding $ {bid.amount} </h4>

            {props.currentUser?.id === bid.user_id ?
                <>
                
                  <button onClick={() => props.handleBidDelete(bid.id)}>
                    Delete
                  </button>
                </>
                :
                null
            }
          </div>
        ))
      }
    </div>
  )
}
