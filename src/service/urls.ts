import axios from 'axios';

const APIToken = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1M2JiMWMzMjY2ZjViZDlkODAzZTM4NDI2Njk3NjcwYiIsIm5iZiI6MTc0NTMzMjYyNi45NTIsInN1YiI6IjY4MDdhOTkyYWMwMmQ0NDA3YmFiMGEyZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.S0WjHBwjeiYRRYRUq-F6bFdnr_B1gOGuq938Bgzumqs'

export const axiosInstance = axios.create({
baseURL: '\n' +
    'https://api.themoviedb.org/3',
headers:{
    'Accept': 'application/json',
    Authorization: 'Bearer ' + APIToken
},
})