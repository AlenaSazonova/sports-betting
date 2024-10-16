import './App.css';
import React from 'react';
import GlobalStyle from './GlobalStyles';
import ProjectTitle from '../src/components/projectTitle/ProjectTitle'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/homePage/HomePage';
import EventDetailsPage from './pages/eventDetailsPage/EventDetailsPage';

function App() {
    return (
        <>
            <GlobalStyle />
            <ProjectTitle />
            <Router>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/event/:id" element={<EventDetailsPage />} />
                </Routes>
            </Router>
        </>
    );
}

export default App;