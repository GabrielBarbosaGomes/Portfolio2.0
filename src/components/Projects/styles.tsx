import styled from 'styled-components';

export const ProjectsComponents= styled.section`
    padding: 6rem 0 2rem;
    background-color: var(--color-white);
    h1,
    h2,
    h3{
        color: var(--color-black);
    }
`
export const Title= styled.div`
    text-align: center;
    margin-bottom: 4rem;

    span{
        color: var(--color-gray);
    }
`
export const ProjectWrappers= styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    
    margin: auto;

    @media (min-width: 768px){
        
    }
`
export const ProjectItems= styled.div`
    padding: 1rem;
    grid-template-columns: 1fr 1fr;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    p{
        color: var(--color-gray);
    }

    a{
        display: flex;
        align-items: center;
        color: var(--color-green-dark);
        cursor: pointer;
        text-decoration: none;

        &:hover{
            color: var(--color-green-neon);
        }
    }

    &:hover{
        box-shadow: 0px 4px 8px var(--color-card-shadow);
    }

    @media (min-width: 768px){
        width: 100%;
        flex-direction: initial;
        align-items: center;
    }
`
export const ContentProject= styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    @media (min-width: 768px){
        padding-right: 20px;
    }
`

export const ImgProject= styled.div`
    max-width: 50vw;
    margin: auto;
    img{
        width: 100%;
        filter: drop-shadow(0 8px 8px var(--color-card-shadow));
        border-radius: 3px;
        padding-top: 1.5rem;
    }

    @media (min-width: 768px){
        max-width: 20vw;
        margin: 0;
        img{
            padding-top: 0;
        }
    }

    @media (min-width: 1024px){
        max-width: 15vw;
    }

    @media (min-width: 1366px){
        max-width: 13rem;
    }
`

export const WrapperContent= styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    p{
        text-align: center;
        color: var(--color-gray);
    }

    a{
        text-decoration: none;
    }

    .button{
        width: 100%;
    }
`