import { Fragment } from "React"
import { useRouter } from "next/router"
import { getAllEvents } from "../../helpers/api-util"
import EventList from "../../components/event/event-list"
import EventSearch from "../../components/event/event-search"
import { getStaticProps } from ".."

function AllEventsPage(props) {
  const router = useRouter()
  const { events } = props

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

export async function getStaticProps() {
  const events = await getAllEvents()

  return {
    props: {
      events: events,
      revalidate: 60,
    },
  }
}

export default AllEventsPage
