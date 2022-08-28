import styled from 'styled-components';



export const Im= styled.section`
    padding: 2rem 0 2rem;
    background-color: var(--color-white);

    h1,
    h2,
    h3{
        color: var(--color-black);
    }

    @media (min-width: 768px){
        padding: 6rem 0 4rem;
    }
`

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
        box-shadow: 15px 9px 11px #3e3e3e33;
        transition: .5s ease-in;

        &:hover{
            transform: scale(1.05);

            box-shadow: 
            rgba(3, 233, 244, 0.5) 6px 9px 2px,
            rgba(3, 233, 244, 0.3) 11px 14px 2px,
            rgba(3, 233, 244, 0.2) 16px 20px 2px;

            transform: 
            rotate(1deg)
            skew(-.5deg, -.5deg);
        }
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