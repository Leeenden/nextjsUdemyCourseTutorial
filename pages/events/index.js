import { Fragment } from "React"
import { useRouter } from "next/router"

import { getAllEvents } from "../../dummy-data"
import EventList from "../../components/event/event-list"
import EventSearch from "../../components/event/event-search"

function AllEventsPage() {
  const events = getAllEvents()
  const router = useRouter()

  function findEventsHandler(year, month) {
    const fullPath = `/events/${year}/${month}`

    router.push(fullPath)
  }

  return (
    <Fragment>
      <EventSearch onSearch={findEventsHandler} />
      <EventList items={events} />
    </Fragment>
  )
}

export default AllEventsPage
