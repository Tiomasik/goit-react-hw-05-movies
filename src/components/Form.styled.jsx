import styled from 'styled-components';

export const FormStyle = styled.form `
    margin-left: 20px;
    display: flex;
    gap: 20px;
    align-items: center;
`

export const Input = styled.input `
    width: 250px;
    height: 30px;
    font-size: 18px;
`

export const Button = styled.button `
    padding: 6px 20px;
    border-radius: 5px;
    color: black;
    font-weight: 500;
    border: 1px solid blue;
    background-color: transparent;
    cursor: pointer;
    font-size: 18px;

    :hover {
        color: white;
        background-color: blue;
    }
`