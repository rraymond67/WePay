import { api } from './api'

export const getItemBids = async (item_id) => {
  const resp = await api.get(`/items/${item_id}/bids`)
  return resp.data
}

export const createBid = async (item_id, bidData) => {
  const resp = await api.post(`/items/${item_id}/bids`, { bid: bidData })
  return resp.data
}

export const updateBid = async (bid_id, item_id, bidData) => {
  const resp = await api.put(`/items/${item_id}/bids/${bid_id}`, { bid: bidData })
  return resp.data
}

export const deleteBid = async (item_id, bid_id) => {
  const resp = await api.delete(`/items/${item_id}/bids/${bid_id}`)
  return resp.data
}