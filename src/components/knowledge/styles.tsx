import styled from 'styled-components';

export const KnowComponents= styled.section`
    padding: 4rem 0 4rem;
    background-color: var(--color-white);
    display: grid;
    justify-content: center;
    grid-template-columns: auto;
    gap: 4rem;
    
    h1,
    h2{
        color: var(--color-black);
    }
`

export const Title= styled.div`
    text-align: center;
    margin-bottom: 3rem;
    span{
        color: var(--color-gray);
    }
`
export const WrapperContent= styled.button`
    display: flex;
    align-items: center;
    justify-content: space-around;
    gap: 1rem;
    grid-template-columns: max-content;
    margin-left: auto;
    margin-right: auto;
    position: relative;
    border-radius: 10px;
    border: none;
    background: transparent;

    svg{
        font-size: 3rem;
        color: var(--color-green-dark);
        transition: 0.35s ease-in-out;
    }

    .click{
        cursor: pointer;
    }

    .rotate{
        transform: scaleY(-1);
        
    }

    @media (min-width: 768px){
        width: 50vw;
        svg{
            font-size: 2rem;
        }
    }

    @media (min-width: 1366px){
        width: 30vw;
    }
`
export const Content= styled.div`
    h1{
        margin-bottom: .5rem;
        font-weight: 600;
        font-size: 1.5rem;
    }
    span{
        color: var(--color-gray);
        font-size: .8rem;
    }
`
export const Skills= styled.div`
   
    background: var(--color-green-dark);
    padding: 1rem;
    border-radius: 1.8rem;
    margin: auto;
    transform: scale(1.1);
    box-shadow: 0px 2px 7px 3px var(--color-card-shadow);
    
    @media (min-width: 768px){
        width: 45vw;
    }

    @media (min-width: 1024px){
        width: 25vw;
    }
`
export const SkillWrapper= styled.div`

`

export const SkillTitle= styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`
export const SkillBar= styled.div`
    background-color: black;
    height: 5px;
    border-radius: 0.25rem;

    span{
        display: block;
        background-color: var(--color-green-neon);
        height: 5px;
        border-radius: 0.25rem;
    }

    .avancado{
        width: 80%;
    }

    .intermediario{
        width: 50%;
    }

    .basico{
        width: 10%;
    }
`