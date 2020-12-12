import axios from 'axios'

export default axios.create({
  baseURL: 'https://monitoramento-de-vaga-api.herokuapp.com'
})