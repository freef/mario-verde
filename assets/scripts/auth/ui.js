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
}
const signInFailure = () => {
  $('#user-message').text('Failed to sign in')
  $('form').trigger('reset')
  $('input').trigger('reset')
}

const signOutSuccess = () => {
  $('#user-message').text('Successfully Signed Out!')
  $('form').trigger('reset')
  $('input').trigger('reset')
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

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  signOutSuccess,
  signOutFailure,
  changePasswordSuccess,
  changePasswordFailure
}
