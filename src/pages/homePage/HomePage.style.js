import styled from "styled-components";


export const Container = styled.div`
    text-align: center;

    @media (max-width: 768px) {
        padding: 0 10px;
    }
`;

export const Heading = styled.h1`
    text-align: center;
    color: #123357;
    margin-bottom: 40px;
    font-size: 40px;

    @media (max-width: 768px) {
        font-size: 28px;
        margin-bottom: 20px;
    }
`;

export const Notification = styled.div`
    background-color: #d4edda;
    padding: 15px;
    margin-bottom: 20px;
    border-radius: 5px;
    color: #155724;
    font-weight: bold;

    @media (max-width: 768px) {
        font-size: 14px;
        padding: 10px;
    }
`;

export const EventList = styled.ul`
    padding: 20px;
    border-radius: 8px;
    background-color: #f0f4f8;

    @media (max-width: 768px) {
        padding: 10px;
    }
`;


export const EventItem = styled.li`
    margin: 20px 0;
    padding: 20px;
    border: 1px solid #ddd;
    border-radius: 5px;
    transition: background 0.2s ease;
    font-size: 30px;

    &:hover {
        background: #dae3f9;
    }

    a {
        text-decoration: none;
        color: #007bff;

        &:hover {
            text-decoration: underline;
        }
    }

    @media (max-width: 768px) {
        margin: 15px 0;
        padding: 15px;
        font-size: 22px;
    }
`;