import axios from 'axios'

// Change out functions
const PollAPI = {
  getItems: () => axios.get('/items'),
  addItem: (item) => axios.post('/items', item),
  updateItem: (id, values) => axios.put(`/items/${id}`, values),
  deleteItem: (id) => axios.delete(`/items/${id}`)
}

export default PollAPI
