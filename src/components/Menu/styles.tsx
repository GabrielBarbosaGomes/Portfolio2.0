import styled from 'styled-components';

export const HeaderComponent=styled.header`
    width: 100%;
    position: fixed;
    left: 0%;
    z-index: 1;
    background-color: red;

    a{
        text-decoration: none;
        color: black;
    }
`

export const MenuComponent= styled.nav`
    display: none;

    @media (min-width: 768px){
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
`
export const WrapperList = styled.div`
    display: flex;
    padding: 2rem;
    margin-left: auto;
`

export const List= styled.ul`
    list-style: none;
    display: flex;
    justify-content: space-around;
    padding: 0;
    margin: 0;
    column-gap: 2rem
`
export const ItemList= styled.li`
    text-align: -webkit-match-parent;
    a{
        &:hover{
            color: #03e9f4;
        }
    }
    
`