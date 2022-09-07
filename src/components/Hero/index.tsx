import { Button } from "../Button";
import { HeroComponent, ImgWrapper, MyImg, SocialComponent, WrapperOpening } from "./styles";
import eu from "../../assets/imagens/eu.png"
import { IoMdSend } from "@react-icons/all-files/io/IoMdSend";
import { ImLinkedin2 } from "@react-icons/all-files/im/ImLinkedin2";
import { ImGithub } from "@react-icons/all-files/im/ImGithub";

export function Hero(){
    return(
        <HeroComponent className="paddingContainer">
            <SocialComponent>
                <a href="https://www.linkedin.com/in/gabrielbarbosagomes/" target="_blank" rel="noopener noreferrer"><ImLinkedin2 /></a>
                <a href="https://github.com/GabrielBarbosaGomes" target="_blank" rel="noopener noreferrer"><ImGithub /></a>
            </SocialComponent>

            <MyImg>
                <ImgWrapper>
                    <img src={eu} />
                </ImgWrapper>
            </MyImg>

            <WrapperOpening>
                <h1>Olá, eu sou o Gabriel</h1>
                <h3>Desenvolvedor Front-end</h3>
                <p>Experiênte em sempre buscar o alto nível em web design e desenvolvimento de sistemas, produzindo um trabalho de qualidade.</p>
                <a href="#contact">
                    <Button>
                        Fale Comigo
                        <IoMdSend />
                    </Button>
                </a>
            </WrapperOpening>
        </HeroComponent>
    )
}