'use strict'
const store = require('../store.js')

const signUpSuccess = () => {
  $('#user-message').text('Successfully Signed Up!')
  $('form').trigger('reset')
  $('input').trigger('reset')
}
const signUpFailure = () => {
  $('#user-message').text('Failed to add user.')
  $('form').trigger('reset')
  $('input').trigger('reset')
}

const signInSuccess = (responseData) => {
  $('#user-message').text('Successfully Signed In!')
  store.user = responseData.user
  $('form').trigger('reset')
  $('input').trigger('reset')
  $('.signed-in-only').removeClass('d-none')
  $('.signed-out-only').addClass('d-none')
  hideSignIn()
  hideSignUp()
  hideSignedOutOnly()
  hideChangePw()
  hideNewEvent()
}

const signInFailure = () => {
  $('#user-message').text('Failed to sign in')
  $('form').trigger('reset')
  $('input').trigger('reset')
}

const signOutSuccess = () => {
  $('#user-message').text('Successfully Signed Out!')
  store.user = {}
  $('form').trigger('reset')
  $('input').trigger('reset')
  $('.signed-out-only').removeClass('d-none')
  $('.signed-in-only').addClass('d-none')
  $('.content').empty()
  $('.mycontent').empty()
}
const signOutFailure = (responseData) => {
  $('#user-message').text('Failed to sign out successfully')
  $('form').trigger('reset')
  $('input').trigger('reset')
}
const changePasswordSuccess = () => {
  $('#user-message').text('Successfully changed password!')
  $('form').trigger('reset')
  $('input').trigger('reset')
}
const changePasswordFailure = () => {
  $('#user-message').text('Failed to change password.')
  $('form').trigger('reset')
  $('input').trigger('reset')
}

const showSignUp = () => {
  hideSignIn()
  $('.hide-sign-up').removeClass('d-none')
  $('.show-sign-up').addClass('d-none')
}

const hideSignUp = () => {
  $('.hide-sign-up').addClass('d-none')
  $('.show-sign-up').removeClass('d-none')
}

const showSignIn = () => {
  hideSignUp()
  $('.hide-sign-in').removeClass('d-none')
  $('.show-sign-in').addClass('d-none')
}

const hideSignIn = () => {
  $('.hide-sign-in').addClass('d-none')
  $('.show-sign-in').removeClass('d-none')
}

const hideSignedOutOnly = () => {
  $('.signed-out-only').addClass('d-none')
}

const showChangePw = () => {
  $('.change-pw-form').removeClass('d-none')
  $('#show-change-pw-btn').addClass('d-none')
}
const hideChangePw = () => {
  $('.change-pw-form').addClass('d-none')
  $('#show-change-pw-btn').removeClass('d-none')
}

const hideNewEvent = () => {
  $('.new-event-field').addClass('d-none')
  $('#show-new-button').removeAttr('disabled')
  $('#user-message').text('New event canceled')
  $('form').trigger('reset')
  $('input').trigger('reset')
}

const showNewEvent = () => {
  $('.new-event-field').removeClass('d-none')
  $('#show-new-button').attr('disabled')
  $('#user-message').text('Create a new event')
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  signOutSuccess,
  signOutFailure,
  changePasswordSuccess,
  changePasswordFailure,
  showSignUp,
  hideSignUp,
  hideSignIn,
  showSignIn,
  hideSignedOutOnly,
  showChangePw,
  hideChangePw,
  hideNewEvent,
  showNewEvent
}
