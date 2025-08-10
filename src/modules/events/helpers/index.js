
import events from './events-data-source'

export const getNearestEvent = () => {
  const now = new Date()
  const nearestEvent = events.find(event => new Date(event.startDate) > now)
  return nearestEvent
}

export const getUpcomingEvents = (nearestEvent) => {
  const now = new Date()
  return events.filter(event => new Date(event.startDate) > now && event.id !== nearestEvent.id)
}
