import eu from "../../assets/imagens/euF.jpeg"
import { Content, Im, Title } from "./styles"

export function AboutMe() {

const howOldIm = () => {
    const myBirthDay = new Date('Aug 15 1998');
    const dateNow = new Date();
    const myAge = Math.floor(Math.ceil(Math.abs(myBirthDay.getTime() - dateNow.getTime()) / (1000 * 3600 * 24)) / 365.25)
    return myAge;
}

const howLongWorking = () => {
    const startDate = new Date('Sep 01 2022');
    const dateNow = new Date();
    const timeDiff = dateNow.getTime() - startDate.getTime();
    
    const diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
    const diffYears = Math.floor(diffDays / 365.25);
    const diffMonths = Math.floor((diffDays % 365.25) / 30.44);

    return { years: diffYears, months: diffMonths };
}


    return (
        <Im className="paddingContainer" id="AboutMe">
            <Title>
                <h2>Sobre mim</h2>
                <span>A minha introdução</span>
            </Title>

            <Content>
                <img src={eu} />
                <p>
                Atualmente tenho {howOldIm()} anos e atuo com desenvolvimento de software a {howLongWorking().years} anos e {howLongWorking().months} meses,
                atualmente sou fullstack ultilizando as linguagens C#, java script e type script. Com fortes
                habilidades em foco, determinação, aprendizado rápido e curiosidade intelectual. Além
                disso, sou um entusiasta da vida, universo e tecnologia, dedicado à
                academia, livros, família e amigos nos tempos livres.
                </p>
            </Content>
        </Im>
    )
}