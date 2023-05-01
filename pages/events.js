import React, { useState } from 'react'
import { useRouter } from 'next/router'

const Events = (props) => {
    const [events, setEvents] = useState(props.events)

    const router = useRouter()

    const fetchSportEvents = async () => {
        const response = await fetch('http://localhost:4000/events?category=sports')
        const data = await response.json()
        setEvents(data)
        router.push('/events?category=sports', undefined, { shallow: true })
    }

    return (
        <div>
            <button onClick={() => fetchSportEvents()}> Sports Events</button>
            {events.map((event) => {
                return (
                    <div>
                        <h2>
                            {event.id}  | {event.title} | {event.category}
                        </h2>
                    </div>
                )
            })}
        </div>
    )
}

export default Events

export async function getServerSideProps() {
    const response = await fetch('http://localhost:4000/events')
    const data = await response.json()

    return {
        props: {
            events: data
        }
    }
}