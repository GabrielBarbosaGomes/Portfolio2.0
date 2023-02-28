import styled from 'styled-components';

export const HeaderComponent=styled.header`
    width: 100%;
    position: fixed;
    bottom: 0;
    left: 0%;
    z-index: 1000;
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
    box-shadow: 0 -1px 4px rgb(0 0 0 / 15%);
    flex-direction: column;
    align-items: stretch;
    padding-bottom: 1rem;
    a{
        &:hover{
            color: var(--color-green-neon);
        }
    }

    @media (min-width: 768px){
        justify-content: space-between;
        align-items: center;
        box-shadow: none;
        height: auto;
        flex-direction: initial;
        align-items: center;
        padding-bottom: 0;
    }
`
export const Logo= styled.img`
    width: 40px;
    @media (min-width: 768px){
        width: 100px;
    }
`

export const WrapperList = styled.div`
    display: flex;

    &.menuClose{
        display: none;

        @media (min-width: 768px){
            display: flex;
        }
    }

    &.menuOpen{
        display: flex;
    }

    @media (min-width: 768px){
        display: flex;
        padding: 2rem;
        margin-left: auto;
    }
`

export const List= styled.ul`
    list-style: none;
    display: flex;
    justify-content: space-around;
    padding: 0;
    margin: 0;
    column-gap: 2rem;
    flex-direction: column;
    width: max-content;

    @media (min-width: 768px){
        flex-direction: initial;
    }
`
export const ItemList= styled.li`
    text-align: -webkit-match-parent;

    padding: 0.5rem 0;
    a{
        padding: 0;

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
export const IconesMobile= styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
`

export const MenuMobile= styled.div`
    svg{
        color: var(--color-black)
    }

    @media (min-width: 768px){
        display: none;
    }
`
export const BackDrop = styled.div`
    &.active{
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background-color: rgba(0, 0, 0, 0.2);
        z-index: 900;
    }
`