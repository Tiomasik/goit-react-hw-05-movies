import styled from 'styled-components';

export const List = styled.ul `
    display: grid;
    max-width: calc(100vw - 48px);
    grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
    grid-gap: 16px;
    margin-top: 0;
    margin-bottom: 0;
    padding: 0;
    list-style: none;
    margin-left: auto;
    margin-right: auto;

    li {
        border-radius: 2px;
        box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
        0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);

        img {
            width: 100%;
            height: 180px;
            object-fit: cover;
            transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
        }

        div {
            padding: 5px;
        }
   }

`

export const Character = styled.p `
    margin: 0;
    font-size: 12px; 
`

export const Name = styled.p `
   font-size: 14px;
   font-weight: 700;
   margin: 0;
   margin-bottom: 5px 
`

