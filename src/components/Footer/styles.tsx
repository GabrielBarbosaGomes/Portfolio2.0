import styled from 'styled-components';

export  const FooterComponent= styled.footer`
    padding: 2rem 2rem 7rem;
    background: var(--color-green-dark);
    display: flex;
    justify-content: space-between;
    gap: 1rem;

    .start{
        display: flex;
        gap: 1rem;

        @media (min-width: 1024px){
            gap: 2rem;
        }
    }

    @media (min-width: 768px) {
        padding: 2rem 2rem 2rem 2rem;
        margin-bottom: 0;
    }
`
export const Title= styled.div`
    display: flex;
    flex-direction: column;
    max-width: 40vw;
    color: #fff;
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
        color: #fff;
        transition: 0.25s ease-in-out;
        padding: 8px 0;
        
        &:hover{
            color: var(--color-green-neon);
            transform: scale(1.05);
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
            color: #fff;
            transition: 0.25s ease-in-out;
        }

        &:hover{
            color:  var(--color-green-neon);
        }

        .links{
            &:hover{
                color: var(--color-green-neon);
                font-size: 23px;
                transform: scale(1.05);
            }
        }
    }
`