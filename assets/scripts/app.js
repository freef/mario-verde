'use strict'
const authEvents = require('./auth/events.js')
const eventEvents = require('./events/events.js')
// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  $('#sign-up-form').on('submit', authEvents.onSignUp)
  $('#sign-in-form').on('submit', authEvents.onSignIn)
  $('#change-password-form').on('submit', authEvents.onChangePassword)
  $('#sign-out-form').on('submit', authEvents.onSignOut)
  $('#create-event-form').on('submit', eventEvents.onCreateEvent)
  $('#index-event-form').on('submit', eventEvents.onIndexEvents)
  $('#show-event-form').on('submit', eventEvents.onShowEvent)
  $('#update-event-form').on('submit', eventEvents.onUpdateEvent)
  $('.my-content').on('submit', '.delete-event-form', eventEvents.onDeleteEvent)
  $('.my-content').on('submit', '.view-form', eventEvents.onEditBtn)
  $('.my-content').on('submit', '.hide-form', eventEvents.onStopUpdateBtn)
  $('.my-content').on('submit', '.my-update-form', eventEvents.onUpdateEvent)
  $('.my-content').on('click', '.event-hider-btn', eventEvents.onHideEvent)
  $('.content').on('click', '.event-hider-btn', eventEvents.onHideEvent)
  $('#show-sign-up-btn').on('click', authEvents.onShowSignUp)
  $('#hide-sign-up-btn').on('click', authEvents.onHideSignUp)
  $('#show-sign-in-btn').on('click', authEvents.onShowSignIn)
  $('#hide-sign-in-btn').on('click', authEvents.onHideSignIn)
  $('#show-change-pw-btn').on('click', authEvents.onShowChangePw)
  $('#hide-change-pw-btn').on('click', authEvents.onHideChangePw)
  $('.main-control-bar').on('submit', '#show-my-events-form', eventEvents.onIndexMyEventsBtn)
  $('.main-control-bar').on('submit', '#show-new-event-form', authEvents.onShowNewEvent)
  $('#cancel-new-event-form').on('submit', authEvents.onHideNewEvent)
  $('#hide-my-events-form').on('submit', eventEvents.onHideMyEvents)
  $('.logo').on('click', eventEvents.onLogo)
})
