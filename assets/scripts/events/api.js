'use strict'
const config = require('../config.js')
const store = require('../store.js')

const createEvent = (formData) => {
  const event = formData.event
  return $.ajax({
    url: config.apiUrl + '/events',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: {event}
  })
}

const indexEvents = () => {
  return $.ajax({
    url: config.apiUrl + '/events',
    method: 'GET'
  })
}

const indexMyEvents = () => {
  return $.ajax({
    url: config.apiUrl + '/my-events',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const showEvent = (formData) => {
  const id = formData.event.id
  return $.ajax({
    url: config.apiUrl + `/events/${id}`,
    method: 'GET'
  })
}

const updateEvent = (formData) => {
  const event = formData.event
  const id = formData.event.id
  return $.ajax({
    url: config.apiUrl + `/events/${id}`,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: {event}
  })
}

const deleteEvent = (formData) => {
  const id = formData.id
  console.log(formData)
  return $.ajax({
    url: config.apiUrl + `/events/${id}`,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  createEvent,
  indexEvents,
  showEvent,
  updateEvent,
  deleteEvent,
  indexMyEvents
}
