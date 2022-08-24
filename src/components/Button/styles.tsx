import styled from 'styled-components';

export const ButtonComponent= styled.button`
    color: var(--color-white);
    padding: 1rem;
    background-color: var(--color-green-dark);
    border-radius: 0.5rem;
    border: none;
    display: flex;
    column-gap: 0.3rem;
    cursor: pointer;
    &:hover{
        background: var(--color-green-neon);
    }
`