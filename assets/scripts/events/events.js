'use strict'
const getFormFields = require('../../../lib/get-form-fields.js')
const api = require('./api.js')
const ui = require('./ui.js')

const onCreateEvent = event => {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  api.createEvent(formData)
    .then(ui.createEventSuccess)
    .catch(ui.createEventFailure)
}

const onIndexEvents = event => {
  event.preventDefault()
  api.indexEvents()
    .then(ui.indexEventsSuccess)
    .catch(ui.indexEventsFailure)
}

const onShowEvent = event => {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  api.showEvent(formData)
    .then(ui.showEventSuccess)
    .catch(ui.showEventFailure)
}

const onUpdateEvent = event => {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  api.updateEvent(formData)
    .then(ui.updateEventSuccess)
    .catch(ui.updateEventFailure)
}
const onDeleteEvent = event => {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  api.deleteEvent(formData)
    .then(ui.deleteEventSuccess)
    .catch(ui.deleteEventFailure)
    .then(api.indexEvents)
    .then(ui.indexEventsSuccess)
    .catch(ui.indexEventsFailure)
}

module.exports = {
  onCreateEvent,
  onIndexEvents,
  onShowEvent,
  onUpdateEvent,
  onDeleteEvent
}
