//core imports
import { Fragment } from "react"
import { useRouter } from "next/router"
// component imports
import EventSummary from "../../components/event-detail/event-summary"
import EventLogistics from "../../components/event-detail/event-logistics"
import EventContent from "../../components/event-detail/event-content"
//dummy data import
import { getEventById } from "../../dummy-data"
import ErrorAlert from "../../components/ui/error-alert"

// define function
function EventDetailPage() {
  // define router
  const router = useRouter()
  // router query to cgrab the event ID
  const eventId = router.query.eventId
  // run the function from dummy data
  const event = getEventById(eventId)
  // check for NOT truthy
  if (!event) {
    return (
      <ErrorAlert>
        <p>No event found!</p>
      </ErrorAlert>
    )
  }

  return (
    <Fragment>
      <EventSummary title={event.title} />
      <EventLogistics
        date={event.date}
        address={event.location}
        image={event.image}
        imageAlt={event.title}
      />
      <EventContent>
        <p>{event.description}</p>
      </EventContent>
    </Fragment>
  )
}

export default EventDetailPage
