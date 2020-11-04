import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID fyMQm72A31Qrv1otQNVXcoCp2ACN63jtiNrdd7xF3As'
  }
});