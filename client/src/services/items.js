import { api } from './api'

export const getAllItems = async () => {
  const resp = await api.get('/items')
  return resp.data
}

export const getOneItem = async (item_id) => {
  const resp = await api.get(`/items/${item_id}`)
  return resp.data
}

export const createItem = async (itemData) => {
  const resp = await api.post('/items', { item: itemData })
  return resp.data
}

export const updateItem = async (item_id, itemData) => {
  const resp = await api.put(`/items/${item_id}`, { item: itemData })
  return resp.data
}

export const deleteItem = async ()