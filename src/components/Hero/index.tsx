import { Button } from "../Button";
import { HeroComponent, ImgWrapper, MyImg, SocialComponent, WrapperOpening } from "./styles";
import eu from "../../assets/imagens/eu.png"
import {IoMdSend} from "react-icons/io"
import {GrLinkedinOption, GrGithub} from "react-icons/gr"

export function Hero(){
    return(
        <HeroComponent className="paddingContainer">
            <SocialComponent>
                <a href="#"><GrLinkedinOption /></a>
                <a href="#"><GrGithub /></a>
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
                <Button>
                    Fale Comigo
                    <IoMdSend />
                </Button>
            </WrapperOpening>
        </HeroComponent>
    )
}