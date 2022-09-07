import styled from 'styled-components';

export const ContactComponent= styled.section`
    padding: 0rem 0 2rem;
    background-color: var(--color-white);
    h1,
    h2,
    h3{
        color: var(--color-black);
    }

    @media (min-width: 768px){
        padding: 6rem 0 2rem;
    }
`

export const Title= styled.div`
    text-align: center;
    margin-bottom: 3rem;
    span{
        color: var(--color-gray);
    }
`
export const WrapperContact= styled.div`
    display: flex;
    justify-content: space-evenly;
    gap: 1rem;
    flex-direction: column;
    align-items: center;

    @media (min-width: 768px){
        flex-direction: initial;
    }
`
export const ContactItem= styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;

    svg{
        color: var(--color-green-dark);
        font-size: 30px;
    }

    span{
        color: var(--color-gray);
    }

    @media (min-width: 768px){

    }
`