import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import mockEvents from '../../components/mockEvents/mockEvents';
import {
    Container,
    Heading,
    Notification,
    EventList,
    EventItem
}
    from './HomePage.style';

const HomePage = () => {
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        if (location.state && location.state.message) {
            const timer = setTimeout(() => {
                navigate('.', { replace: true, state: {} });
            }, 2000);
            return () => clearTimeout(timer);
        }
    }, [location, navigate])

    return (
        <Container>
            <Heading>Current and Upcoming Events</Heading>
            {location.state && location.state.message && (
                <Notification>
                    {location.state.message}
                </Notification>
            )}
            <EventList>
                {mockEvents.map(event => (
                    <EventItem key={event.id}>
                        <Link to={`/event/${event.id}`}>
                            {event.homeTeam} against {event.guestTeam} - {event.date}
                        </Link>
                    </EventItem>
                ))}
            </EventList>
        </Container>
    );
};

export default HomePage;