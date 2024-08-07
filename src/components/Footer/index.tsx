import { FooterComponent, Links, Social, Title } from "./styles";
import { ImLinkedin2 } from "@react-icons/all-files/im/ImLinkedin2";
import { FaGithub } from "@react-icons/all-files/fa/FaGithub";


export function Footer(){
    return(
        <FooterComponent className="paddingContainer">
            <div className="start">
                <Title>
                    <h1>Gabriel Barbosa Gomes</h1>
                    <span>Desenvolvedor Front-end</span>
                </Title>

                <Links>
                    <a href="#aboutMe">Sobre mim</a>
                    <a href="#skill">Habilidade</a>
                    <a href="#projects">Projetos</a>
                </Links>
            </div>
            
            <Social>
                <a href="https://www.linkedin.com/in/gabrielbarbosagomes/" target="_blank" rel="noopener noreferrer"><ImLinkedin2 className="links" /></a>
                <a href="https://github.com/GabrielBarbosaGomes" target="_blank" rel="noopener noreferrer"><FaGithub className="links" /></a>
            </Social>
            
        </FooterComponent>
    )
}