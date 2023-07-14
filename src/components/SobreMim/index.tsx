import eu from "../../assets/imagens/euF.jpeg"
import { Content, Im, Title } from "./styles"

export function SobreMim() {
    return (
        <Im className="paddingContainer" id="sobreMim">
            <Title>
                <h2>Sobre mim</h2>
                <span>A minha introdução</span>
            </Title>

            <Content>
                <img src={eu} />
                <p>
                    Sou desenvolvedor Front-end, moro em uberlândia-MG, tenho 24 anos, estou atuando no momento com React e Vue no front-end, php no back-end, e no db MySql, Estou estudando no momento o roadmaps de backend de forma aprofundada, para criar uma base sólida de conhecimentos aliado a oportunidade de executar na prática pela infracommerce.
                </p>
            </Content>
        </Im>
    )
}