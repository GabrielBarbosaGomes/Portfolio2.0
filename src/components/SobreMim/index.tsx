import eu from "../../assets/imagens/euF.jpeg"
import { Content, Im, Title } from "./styles"

export function SobreMim(){
    return(
        <Im className="paddingContainer" id="sobreMim">
            <Title>
                <h2>Sobre mim</h2>
                <span>A minha introdução</span>
            </Title>
            
            <Content>
                <img src={eu}/>
                <p>
                Sou desenvolvedor Front-end, moro em uberlândia-MG, tenho 24 anos, em busca de novos desafios, estou atuando no momento com angular e react, estou estudando redux, iniciando meus estudos de testes e analisando as liguagens para decidir com qual linguagem irei iniciar meus estudos no back-end, até o momento tem chamado minha atenção nodeJs, C# e java.
                </p>
            </Content>
        </Im>
    )
}