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
                    Meu nome é Gabriel, tenho 24 anos, moro em Uberlândia-MG, sou desenvolvedor Front-end(ainda Jr) em busca de novos desafios, sempre tive interesse na programação, porém a vida é uma caixinha de surpresa, agora estou de volta e a todo vapor ingressando no mercado, estudando por conta e sendo mentorado por um dev sênior, Nas horas vagas eu pratico exercícios físicos como jogar bola, correr e ir à academia(princial kk), ou jogar online com meus amigos(o mais recorrente kk), gosto de ambientes descontraídos e que as pessoas não tenham medo de serem quem elas são.
                </p>
            </Content>
        </Im>
    )
}