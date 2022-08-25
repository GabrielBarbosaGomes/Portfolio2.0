import styled from 'styled-components';

export  const FooterComponent= styled.footer`
    padding: 2rem;
    background: var(--color-green-dark);
    display: flex;
    justify-content: space-evenly;
    gap: 1rem;

    .start{
        display: flex;
        gap: 2rem;

        @media (min-width: 768px){
            gap: 4rem;
        }

        @media (min-width: 1024px){
            gap: 8rem;
        }
    }
`
export const Title= styled.div`
    display: flex;
    flex-direction: column;
    max-width: 40vw;
    h1{
        margin: 0;
        font-size: 1.5rem;
    }
`

export const Links= styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    a{
        text-decoration: none;
        color: var(--color-black);

        &:hover{
            color: var(--color-green-neon);
            font-weight: 700;
        }
    }
`
export const Social= styled.div`
    display: flex;
    flex-direction: column;
    justify-content: start;

    a{
        color: var(--color-black);

        svg{
            font-size: 22px;
        }

        &:hover{
            color:  var(--color-green-neon);
        }
    }
`