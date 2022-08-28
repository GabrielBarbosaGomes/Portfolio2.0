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
        width: 49vw;
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
        width: 30%;
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