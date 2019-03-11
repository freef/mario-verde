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
  $('#delete-event-form').on('submit', eventEvents.onDeleteEvent)
})
