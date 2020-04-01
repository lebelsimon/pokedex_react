/* global localStorage */

import axios from 'axios'

const API_URL = 'https://calm-island-15327.herokuapp.com/'

export default axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer ' + localStorage.getItem('id_token')
  }
})