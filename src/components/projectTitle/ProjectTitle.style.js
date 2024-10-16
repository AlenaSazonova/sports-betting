import styled from "styled-components";


export const TitleContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 50px;
    margin-top: 10px;

    @media (max-width: 768px) {
        margin-bottom: 20px;
        margin-top: 5px;
    }
`;

export const Title = styled.div`
    color: #123357;;
    font-size: 80px;
    text-align: center;

    @media (max-width: 768px) {
        font-size: 40px;
    }
`;