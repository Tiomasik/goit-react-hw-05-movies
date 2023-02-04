import styled from 'styled-components';

export const FormStyle = styled.form `
    margin-left: 24px;
    margin-bottom: 20px;
    display: flex;
    gap: 20px;
    align-items: center;
`

export const Input = styled.input `
    display: inline-block;
    width: 50%;
    font: inherit;
    font-size: 20px;
    border: none;
    border-bottom: 2px solid #8e8edd;
    outline: none;
    padding-left: 4px;
    padding-right: 4px;
    background-color: transparent;
`

export const Button = styled.button `
    padding: 6px 20px;
    border-radius: 5px;
    color: black;
    font-weight: 500;
    border: 2px solid #8e8edd;
    background-color: transparent;
    cursor: pointer;
    font-size: 18px;

    :hover {
        color: white;
        background-color: #8e8edd;
    }
`