'use strict'
const getFormFields = require('../../../lib/get-form-fields.js')
const api = require('./api.js')
const ui = require('./ui.js')
const userApiEvents = require('../events/api.js')
const userEventsUi = require('../events/ui.js')

const onSignUp = event => {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  api.signUp(formData)
    .then(ui.signUpSuccess)
    .then(ui.hideSignUp)
    .then(ui.hideSignIn)
    .catch(ui.signUpFailure)
}

const onSignIn = event => {
  event.preventDefault()
  ui.hideSignUp()
  const form = event.target
  const formData = getFormFields(form)
  api.signIn(formData)
    .then(ui.signInSuccess).then(userApiEvents.indexMyEvents).then(userEventsUi.myEventsSuccess)
    .catch(ui.signInFailure)
    .catch(userEventsUi.indexEventsFailure)
}

const onSignOut = event => {
  event.preventDefault()
  api.signOut()
    .then(ui.signOutSuccess)
    .then(ui.hideSignUp)
    .then(ui.hideSignIn)
    .catch(ui.signOutFailure)
}
const onChangePassword = event => {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  api.changePassword(formData)
    .then(ui.changePasswordSuccess)
    .catch(ui.changePasswordFailure)
}

const onShowSignUp = event => {
  event.preventDefault()
  ui.showSignUp()
}

const onHideSignUp = event => {
  event.preventDefault()
  ui.hideSignUp()
}

const onShowSignIn = event => {
  event.preventDefault()
  ui.showSignIn()
}

const onHideSignIn = event => {
  event.preventDefault()
  ui.hideSignIn()
}

const onShowChangePw = event => {
  event.preventDefault()
  ui.showChangePw()
}
const onHideChangePw = event => {
  event.preventDefault()
  ui.hideChangePw()
}

const onHideNewEvent = event => {
  event.preventDefault()
  ui.hideNewEvent()
}
const onShowNewEvent = event => {
  event.preventDefault()
  ui.showNewEvent()
}

module.exports = {
  onSignUp,
  onSignIn,
  onSignOut,
  onChangePassword,
  onShowSignUp,
  onHideSignUp,
  onHideSignIn,
  onShowSignIn,
  onShowChangePw,
  onHideChangePw,
  onShowNewEvent,
  onHideNewEvent
}
