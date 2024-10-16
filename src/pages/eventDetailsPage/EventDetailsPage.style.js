import styled from "styled-components";


export const Container = styled.div`
    max-width: 800px;
    margin: 20px auto;
    padding: 20px;
    border-radius: 8px;
    background-color: #f8f9fa;

    @media (max-width: 768px) {
        padding: 10px;
        margin: 10px auto;
    }
`;

export const Heading = styled.h1`
    text-align: center;
    color: #123357;
    font-size: 35px;
    margin-bottom: 20px;

    @media (max-width: 768px) {
        font-size: 24px;
        margin-bottom: 10px;
    }
`;

export const Details = styled.div`
    margin: 20px 0;
    color: black;
    font-size: 25px;
    text-align: center;

    @media (max-width: 768px) {
        font-size: 18px;
        margin: 10px 0;
    }
`;

export const HeadingForm = styled.h2`
    text-align: center;
    color: #123357;
    font-size: 30px;
    margin-bottom: 20px;
    margin-top: 20px;

    @media (max-width: 768px) {
        font-size: 22px;
        margin-bottom: 10px;
    }
`;

export const Form = styled.form`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    margin-bottom: 20px;
    font-size: 30px;

    @media (max-width: 768px) {
        flex-direction: column;
        font-size: 18px;
        gap: 10px;
    }
`;

export const RadioGroup = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-width: 768px) {
        margin-bottom: 10px;
    }
`;

export const RadioInput = styled.input`
    width: 20px;
    height: 20px;
    border: 2px solid #007bff;
    border-radius: 50%;
    display: inline-block;
    position: relative;
    margin-right: 8px;

    &:checked {
        background-color: #007bff;
    }

    @media (max-width: 768px) {
        width: 15px;  
        height: 15px;
    }
`;

export const ButtonContainer = styled.div`
    text-align: center;

    @media (max-width: 768px) {
        margin-top: 10px;
    }
`;

export const Button = styled.button`
    padding: 25px 60px;
    border: none;
    border-radius: 5px;
    background-color: ${props => (props.disabled ? '#ccc' : '#007bff')};
    color: #fff;
    cursor: ${props => (props.disabled ? 'not-allowed' : 'pointer')};
    font-size: 30px;
    font-weight: 700;
    transition: background-color 0.3s ease, transform 0.2s ease;

    &:hover {
        background-color: ${props => (props.disabled ? '#ccc' : '#0056b3')};
        transform: ${props => (props.disabled ? 'none' : 'scale(1.05)')};
    }

    &:active {
        transform: ${props => (props.disabled ? 'none' : 'scale(1.02)')};
    }

    @media (max-width: 768px) {
        padding: 15px 40px;
        font-size: 20px;
    }
`;