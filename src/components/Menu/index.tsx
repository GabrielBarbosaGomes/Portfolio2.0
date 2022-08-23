import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { MenuComponent, WrapperList, List, HeaderComponent, ItemList } from "./styles"

export function Menu(){
    return(
        <HeaderComponent>
            <MenuComponent className="paddingContainer">
                <a href="#">Gabriel</a>
                <WrapperList>
                    <List>
                        <ItemList><a href="#">Início</a></ItemList>
                        <ItemList><a href="#">Sobre mim</a></ItemList>
                        <ItemList><a href="#">Habilidades</a></ItemList>
                        <ItemList><a href="#">Projetos</a></ItemList>
                        <ItemList><a href="#">Fale comigo</a></ItemList>
                    </List>
                </WrapperList>
                <div>
                    
                </div>
            </MenuComponent>
        </HeaderComponent>        
    )
}