import { FooterComponent, Links, Social, Title } from "./styles";
import { GrLinkedinOption } from "react-icons/Gr";
import { FaGithub } from "react-icons/Fa";

export function Footer(){
    return(
        <FooterComponent>
            <div className="start">
                <Title>
                    <h1>Gabriel Barbosa Gomes</h1>
                    <span>Desenvolvedor Front-end</span>
                </Title>

                <Links>
                    <a href="#">Sobre mim</a>
                    <a href="#">Habilidade</a>
                    <a href="#">Projetos</a>
                </Links>
            </div>
            
            <Social>
                <a href="#"><GrLinkedinOption /></a>
                <a href="#"><FaGithub /></a>
            </Social>
            
        </FooterComponent>
    )
}