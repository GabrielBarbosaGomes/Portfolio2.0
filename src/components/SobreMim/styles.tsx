import styled from 'styled-components';

export const Title= styled.div`
    text-align: center;
    margin-bottom: 2rem;
    span{
        color: var(--color-gray);
    }

    @media (min-width: 768px){
       margin-bottom: 4rem;
    }
`
export const Content= styled.div`
    display: flex;
    gap: 2rem;
    grid-template-columns: 1fr 1fr;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    img{
        width: 280px;
        border-radius: 28px;
        box-shadow: 11px 29px 21px rgb(0 0 0 / 30%);
    }

    p{
        color: var(--color-gray);
    }

    @media (min-width: 768px){
        flex-direction: initial;

        img{
            width: 350px;
        }
    }

    @media (min-width: 1024px){
        p{
            max-width: 40vw;
        }
    }

    @media (min-width: 1366px){
        p{
            max-width: 20vw;
        } 
    }
`