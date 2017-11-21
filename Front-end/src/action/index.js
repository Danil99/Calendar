export const ADD_EVENT = 'ADD_EVENT';
export const CHANGE_VARNING = 'CHANGE_VARNING';
export const DELETE_TASK = 'DELETE_TASK';
export const GET_POSTS = 'GET_POSTS';

import axios from 'axios';

let server = 'http://localhost:8080';

function request(path, data = null) {
  return axios.post(`${server}${path}`, data)
    .then(res => res.data)
}

export function getPosts() {
  return request('/events')
    .then(state => ({
      type: GET_POSTS,
      state
    }))
}

export function onAddEvent(title, time, duration) {
  return request('/addEvent', {title, time, duration})
    .then(state => ({
        type: ADD_EVENT,
        state
      }))
}

export function deleteTask(id) {
  return request('/deleteEvent', {id})
    .then(event => ({
        type: DELETE_TASK,
        event
      }))
}

export function onVarningWind() {
  return {
    type: CHANGE_VARNING
  }
}
