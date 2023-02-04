import styled from 'styled-components';
import { Link } from "react-router-dom";

export const Main = styled.main `
    padding: 0 20px;
   
`

export const ButtonBack = styled(Link) `
    display: flex;
    gap: 10px;
    width: 120px;
    align-items: center;
    padding: 4px 8px;
    border-radius: 5px;
    text-decoration: none;
    color: black;
    font-weight: 500;
    margin-bottom: 20px;

    :hover {
        color: white;
        background-color: #8e8edd;
    }

    p {
        margin: 0;
    }
`

export const FilmInfo = styled.div `
    align-items: center;
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding-bottom: 10px;
    border-bottom: 1px solid black;

    @media screen and (min-width: 768px) {
        flex-direction: row;
    }

    img {
        width: 320px;
    }

    div{
        max-width: 400px;
    }
`

export const Title = styled.p `
    margin: 0;
    font-weight: 700;
`

export const Description = styled.p `
    margin: 0;
    margin-bottom: 20px
`

export const List = styled.ul `
    display: flex;
    gap: 10px;
    padding: 0;
    list-style: none;

`

export const LinkBtn = styled(Link) `

    color: black;
    font-weight: 700;
    padding: 4px 12px;
    border-radius: 5px;

    :hover {
        color: #8e8edd;
    }
`