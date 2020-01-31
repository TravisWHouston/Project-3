import axios from 'axios'

// Change out functions
const PollAPI = {
  // Poll Routes
  getNewestPolls: () => axios.get('/api/polls'),
  getTopPolls: () => axios.get('/api/top/polls'),
  getCategories: (category) => axios.get(`/api/polls/${category}`),
  getOnePoll: (id) => axios.delete(`/api/polls/${id}`),
  createPoll: (poll) => axios.post('/api/polls/', poll),
  updateOnePoll: (id, values) => axios.put(`/api/polls/${id}`, values),
  deleteOnePoll: (id) => axios.delete(`/api/polls/${id}`),
  // Comment Routes
  getComments: () => axios.get('/api/comments/'),
  getPollComments: (poll) => axios.get(`/api/comments/${poll}`),
  getOneComment: (id) => axios.get(`/api/comments/${id}`),
  createComment: (comment) => axios.post('/api/comments/', comment),
  deleteOneComment: (id) => axios.delete(`/api/comments/${id}`),
  // User Routes
  registerUser: (user) => axios.post('/api/register', user),
  loginUser: (user) => axios.post('/api/login', user),
  usernameAvailable: (user) => axios.post('/api/username', user)
}

export default PollAPI