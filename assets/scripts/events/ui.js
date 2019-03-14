'use strict'
// const store = require('../store.js')
const showEventsTemplate = require('../templates/event-listing.handlebars')
const showMyEventsTemplate = require('../templates/my-events.handlebars')

const createEventSuccess = () => {
  $('#user-message').text('Successfully created new event')
  $('form').trigger('reset')
  $('input').trigger('reset')
  $('.new-event-field').addClass('d-none')
  $('#show-new-button').removeAttr('disabled')
  $('#user-message').text('New event canceled')
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
  $('#user-message').text('Successfully got all events!')
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
  $('#user-message').text('Successfully got one event!')
  $('.content').empty()
  const showEventsHtml = showEventsTemplate({ events: responseData })
  $('.content').append(showEventsHtml)
  $('form').trigger('reset')
  $('input').trigger('reset')
}
const showEventFailure = () => {
  $('#user-message').text('Failed to get one event')
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
  $('.content').empty()
}
const deleteEventFailure = () => {
  $('#user-message').text('Failed to delete event.')
  $('form').trigger('reset')
  $('input').trigger('reset')
}

const myEventsSuccess = (responseData) => {
  $('#user-message').text('Successfully loaded events')
  const showEventsHtml = showMyEventsTemplate({ events: responseData.events })
  $('.my-content').empty()
  $('.my-content').append(showEventsHtml)
  $('.edit-mode').addClass('d-none')
  $('.view-mode').removeClass('d-none')
}

const showEditBtn = (formData) => {
  $(`.edit-mode-${formData.id}`).removeClass('d-none')
  $(`.view-mode-${formData.id}`).addClass('d-none')
  $('form').trigger('reset')
  $('input').trigger('reset')
}

const stopUpdateBtn = (formData) => {
  $(`.view-mode-${formData.id}`).removeClass('d-none')
  $(`.edit-mode-${formData.id}`).addClass('d-none')
  $('form').trigger('reset')
  $('input').trigger('reset')
}

const hideEvent = (data) => {
  $(`[data-id="${data}"]`).hide()
  $('#user-message').text('Event closed')
}

const hideMyEvents = () => {
  $('.my-content').empty()
  $('#user-message').text('Events hidden')
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
  deleteEventFailure,
  myEventsSuccess,
  showEditBtn,
  stopUpdateBtn,
  hideEvent,
  hideMyEvents
}
