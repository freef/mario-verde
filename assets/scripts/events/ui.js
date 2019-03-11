'use strict'
// const store = require('../store.js')
const showEventsTemplate = require('../templates/event-listing.handlebars')

const createEventSuccess = () => {
  $('#user-message').text('Successfully created new event')
  $('form').trigger('reset')
  $('input').trigger('reset')
}

const createEventFailure = () => {
  $('#user-message').text('Failed to create event.')
  $('form').trigger('reset')
  $('input').trigger('reset')
}
const indexEventsSuccess = (responseData) => {
  const showEventsHtml = showEventsTemplate({ events: responseData.events })
  $('#user-message').text('Successfully got all games!')
  $('form').trigger('reset')
  $('input').trigger('reset')
  $('.content').empty()
  $('.content').append(showEventsHtml)
}
const indexEventsFailure = () => {
  $('#user-message').text('Failed to get events')
  $('form').trigger('reset')
  $('input').trigger('reset')
}

const showEventSuccess = (responseData) => {
  $('#user-message').text('Successfully got one game!')
  $('.content').empty()
  const showEventsHtml = showEventsTemplate({ events: responseData })
  $('.content').append(showEventsHtml)
  $('form').trigger('reset')
  $('input').trigger('reset')
}
const showEventFailure = () => {
  $('#user-message').text('Failed to get one game')
  $('form').trigger('reset')
  $('input').trigger('reset')
  // $('.content').append(showEventsHtml)
}

const updateEventSuccess = () => {
  $('#user-message').text('Successfully updated event!')
  $('form').trigger('reset')
  $('input').trigger('reset')
}
const updateEventFailure = (responseData) => {
  $('#user-message').text('Failed to update event')
  $('form').trigger('reset')
  $('input').trigger('reset')
}
const deleteEventSuccess = () => {
  $('#user-message').text('Successfully deleted event!')
  $('form').trigger('reset')
  $('input').trigger('reset')
}
const deleteEventFailure = () => {
  $('#user-message').text('Failed to delete event.')
  $('form').trigger('reset')
  $('input').trigger('reset')
}

module.exports = {
  createEventSuccess,
  createEventFailure,
  indexEventsSuccess,
  indexEventsFailure,
  showEventSuccess,
  showEventFailure,
  updateEventSuccess,
  updateEventFailure,
  deleteEventSuccess,
  deleteEventFailure
}
