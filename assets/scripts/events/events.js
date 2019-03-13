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

const onIndexMyEvents = () => {
  api.indexMyEvents()
    .then(ui.myEventsSuccess)
    .catch(ui.indexEventsFailure)
}
const onIndexMyEventsBtn = (event) => {
  event.preventDefault()
  api.indexMyEvents()
    .then(ui.myEventsSuccess)
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
    .then(onIndexMyEvents)
    .catch(ui.indexEventsFailure)
}

const onDeleteEvent = event => {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  api.deleteEvent(formData)
    .then(ui.deleteEventSuccess)
    .catch(ui.deleteEventFailure)
    .then(onIndexMyEvents)
    .catch(ui.indexEventsFailure)
}

const onEditBtn = event => {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  ui.showEditBtn(formData)
}

const onStopUpdateBtn = event => {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  ui.stopUpdateBtn(formData)
}

const onHideEvent = event => {
  event.preventDefault()
  ui.hideEvent(event.target.getAttribute('data-id'))
}
const onHideMyEvents = event => {
  event.preventDefault()
  ui.hideMyEvents()
}

module.exports = {
  onCreateEvent,
  onIndexEvents,
  onShowEvent,
  onUpdateEvent,
  onDeleteEvent,
  onEditBtn,
  onStopUpdateBtn,
  onHideEvent,
  onIndexMyEventsBtn,
  onHideMyEvents
}
