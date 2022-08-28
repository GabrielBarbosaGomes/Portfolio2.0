import styled from 'styled-components';

export const KnowComponents= styled.section`
    padding: 4rem 0 4rem;
    background-color: var(--color-white);
    
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
export const WrapperContent= styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    gap: 1rem;
    grid-template-columns: max-content;
    margin-left: auto;
    margin-right: auto;
    position: relative;

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
    position: absolute;
    width: 70vw;
    background: var(--color-green-dark);
    top: 170%;
    transform: scale(1.2);
    padding: 1rem;
    border-radius: 1.8rem;
    
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

export const WrapperAnimation=styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    position: absolute;
    top: 9rem;
    margin: auto;

    h3{
        position: absolute;
        left: 50%;
        color: var(--color-black);
        transform: translate(-50%, -50%);
        animation: morph-effect 10s infinite ease-in-out;

        &:nth-child(1){
            animation-delay: -5s;
        }
        /*&:nth-child(2){
            animation-delay: -10s;
        }
        &:nth-child(3){
            animation-delay: -5s;
        }
        &:nth-child(4){
            animation-delay: -25s;
        }
        &:nth-child(5){
            animation-delay: -10s;
        }
        &:nth-child(6){
            animation-delay: -5s;
        } */
    }

    @keyframes morph-effect {
        0%, 20%, 100%{
            filter:blur(0px);
            opacity: 1;
        }

        40%, 80%{
            filter: blur(16px);
            opacity: 0;
        }
    }
`