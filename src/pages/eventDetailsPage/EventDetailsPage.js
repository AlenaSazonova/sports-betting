import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import mockEvents from '../../components/mockEvents/mockEvents';
import {
    Container,
    Heading,
    Details,
    HeadingForm,
    Form,
    RadioGroup,
    RadioInput,
    ButtonContainer,
    Button
}
    from './EventDetailsPage.style';


const EventDetailsPage = () => {
    const { id } = useParams();
    const event = mockEvents.find(event => event.id === parseInt(id));
    const [selectedBet, setSelectBet] = useState('');
    const navigate = useNavigate();

    if (!event) {
        return <p>Event not found</p>
    }

    const handleBetChange = (e) => {
        setSelectBet(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate('/', { state: { message: `Your bet on ${event.homeTeam} against ${event.guestTeam} (${selectedBet}) is placed!Thank you!`}})
    }

    return (
        <Container>
            <Heading>{event.homeTeam} against {event.guestTeam}</Heading>
            <Details>Date: {event.date}</Details>
            <HeadingForm>Betting Options</HeadingForm>
            <Form onSubmit={handleSubmit}>
                <RadioGroup>
                    <RadioInput 
                        type="radio" 
                        id="home" 
                        name="bet" 
                        value="Home Win"
                        onChange={handleBetChange} 
                    />
                    <label htmlFor="home">Home Win</label>
                </RadioGroup>
                <RadioGroup>
                    <RadioInput 
                        type="radio" 
                        id="draw" 
                        name="bet" 
                        value="Draw"
                        onChange={handleBetChange}
                    />
                    <label htmlFor="draw">Draw</label>
                </RadioGroup>
                <RadioGroup>
                    <RadioInput 
                        type="radio" 
                        id="guest" 
                        name="bet" 
                        value="Guest Win" 
                        onChange={handleBetChange}
                    />
                    <label htmlFor="guest">Guest Win</label>
                </RadioGroup>
            </Form>
            <ButtonContainer>
                <Button
                    type="button"
                    onClick={handleSubmit}
                    disabled={!selectedBet}>
                    Place Bet
                </Button>
            </ButtonContainer>            
        </Container>
    );
};

export default EventDetailsPage;
