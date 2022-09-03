import { MenuComponent, WrapperList, List, HeaderComponent, ItemList, BackgroundHeader, ToggleMode, Logo } from "./styles"
import { useInView } from "react-intersection-observer";
import { useState } from "react";
import { BsMoonFill } from "react-icons/bs";
import { FiSun } from "react-icons/Fi";
import logo from "../../assets/imagens/logo.svg"


export function Menu(props: any){
    const [active, setActive] = useState(false)
    const [anchorHeaderRef, anchorHeaderInView] = useInView({ threshold: 1 });

    function toggleMode() {
        setActive(!active);
    }

    return(
        <>
            <span ref={anchorHeaderRef} className='scroll' ></span>
            <HeaderComponent>
                <MenuComponent className="paddingContainer">
                    <a href="#"><Logo src={logo}/></a>
                    <WrapperList>
                        <List>
                            <ItemList><a href="#">Início</a></ItemList>
                            <ItemList><a href="#sobreMim">Sobre mim</a></ItemList>
                            <ItemList><a href="#skill">Habilidades</a></ItemList>
                            <ItemList><a href="#projects">Projetos</a></ItemList>
                            <ItemList><a href="#contact">Fale comigo</a></ItemList>
                        </List>
                    </WrapperList>
                    {active? 
                        <div onClick={props.toggle}>
                            <ToggleMode href="#" onClick={toggleMode}><FiSun className="toggle" /></ToggleMode>
                        </div>
                        :
                        <div onClick={props.toggle}>
                            <ToggleMode href="#" onClick={toggleMode}><BsMoonFill className="toggle" /></ToggleMode>
                        </div>
                    }
                    
                </MenuComponent>
                <BackgroundHeader className={anchorHeaderInView ? '' : 'translate'} />
            </HeaderComponent>
        </>                
    )
}