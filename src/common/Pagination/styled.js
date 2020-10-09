import styled, { css } from "styled-components";

export const ButtonWrapper = styled.div`
    max-width:525px;
    display:flex;
    justify-content:center;
    align-items:center;
`;

export const StyledButton = styled.button`
    margin: 0px 12px 0px 0px;
    background-color:${({ theme }) => theme.color.lightBlue};
    color:${({ theme }) => theme.color.black};
    padding:10px 16px;
    border-radius: 5px;
    border:none;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    display:flex;
    justify-content:center;
    align-items:center;

    ${({ noActive }) => noActive && css`
        background-color:${({ theme }) => theme.color.gray};
    `}

    ${({ last }) => last && css`
        margin-right:0px;
    `}
`;

export const Arrow = styled.span`
    margin-right:8px;
    font-size:20px;
    font-weight:600;
    color:${({ theme }) => theme.color.blue};

    ${({ noActive }) => noActive && css`
        color:${({ theme }) => theme.color.darkedGray};
    `}
`;

export const PageCounter = styled.p`
    margin-left:12px;
    margin-right:4px;
    color:${({ theme }) => theme.color.darkedGray};
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 150%;
    
`;

export const Quantity = styled.span`
    color:${({ theme }) => theme.color.black};
    margin-left:8px;
    margin-right:8px;
    font-weight: 600;
    font-size: 16px;
    line-height: 150%;
`;