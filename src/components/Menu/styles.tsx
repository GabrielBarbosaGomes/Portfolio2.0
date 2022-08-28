import styled from 'styled-components';

export const HeaderComponent=styled.header`
    width: 100%;
    position: fixed;
    bottom: 0;
    left: 0%;
    z-index: 1;
    background-color: var(--color-white);

    a{
        text-decoration: none;
        color: var(--color-black);
    }

    h1,
    h2,
    h3{
        color: var(--color-black);
    }

    @media (min-width: 768px){
        top: 0;
        bottom: initial;
    }
`

export const MenuComponent= styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0 -1px 4px rgb(0 0 0 / 15%);

    a{
        &:hover{
            color: var(--color-green-neon);
        }
    }

    @media (min-width: 768px){
        justify-content: space-between;
        align-items: center;
        box-shadow: none;
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
            color: var(--color-green-neon);
        }
    }
    
`
export const BackgroundHeader = styled.div`
    display: none;
    
    &.translate {
        transform: none;
    }

    @media (max-width: 768px){
        height: 100%;
        width: 100vw;
        position: absolute;
        left: 0;
        top: 0;
        background-color: var(--color-white);
        transition: 0.3s ease-in-out;
        transform: translateY(-100%);
        padding: 2px 0;
        z-index: -1;
        box-shadow: 0 -1px 4px rgb(0 0 0 / 15%);
    }

    @media (max-width: 1023px){
        height: 40px;
    }
`
export const ToggleMode= styled.span`
    cursor: pointer;
    font-size: 1.1rem;
    color: var(--color-black);
    .toggle{
        &:hover{
            color: var(--color-green-neon);
        }
    }
`
