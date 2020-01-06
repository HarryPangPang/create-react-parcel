// import axios from 'axios';

export const get_username = (data) => ({
    type: 'GET_USERNAME',
    data : data
})

export const set_username = (data)=>({
    type: 'SET_USERNAME',
    data : data
})
