import styled from 'styled-components';

export const HeroComponent= styled.section`
    padding: 6rem 0 2rem;
    display: flex;
    flex-wrap: wrap;
    grid-template-columns: .5fr 3fr;
    gap: 1.5rem;
    padding-top: 5.5rem;
    column-gap: 2rem;
    align-items: center;

    @media (min-width: 768px){
        grid-template-columns: max-content 1fr 1fr;
        flex-wrap: initial;
        justify-content: space-around;
    }
`
export const SocialComponent= styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    grid-template-columns: max-content;
    row-gap: 1rem;

    a > svg{
        font-size: 20px;
        color: var(--color-green-dark);

        &:hover{
            color: var(--color-green-neon);
            transform: scale(1.2);
        }
    }
`
export const MyImg= styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`

export const ImgWrapper= styled.div`
    clip-path: path('M157.312 17.4879C206.582 20.1187 291.309 74.826 199.328 215.186C163.346 279.547 136.807 293.559 67.226 261.353C69.6454 205.297 98.0228 310.023 27.7403 228.362C2.45775 176.8511 -0.48481 90.1033 0.67581 94.5279C20.9871 10.1032 104.7028 2.850868 162.9666 17.001637C136.23 16.303176 178.193 10.857 191.312 34.4879Z');
    background-color: var(--color-green-dark);

    img{
        object-fit: cover;
    }
`

export const WrapperOpening= styled.div`

`