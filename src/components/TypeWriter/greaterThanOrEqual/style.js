import styled from "styled-components"


export const Item = styled.div.attrs(props => ({
    className: props.className
}))`
    padding: 2%;
    font-size: 35px;
    text-align: center;
    width: 100%;
    height: 100%;
    color:white;
    font-family: 'Love Ya Like A Sister', cursive;
`

export const TextWrapper = styled.div`


`