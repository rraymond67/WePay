import React from 'react'

export default function Bids(props) {
  return (
    <div>
      {props.bids && 
        props.bids.map(bid => (
          <div key={bid.id}>
            <h4>{bid.user.username} is bidding {bid.amount}</h4>

            {props.currentUser?.id === bid.user_id ?
                <>
                  <button>Edit</button>
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
