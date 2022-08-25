import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { MenuComponent, WrapperList, List, HeaderComponent, ItemList, BackgroundHeader } from "./styles"
import { useInView } from "react-intersection-observer";
import { useState } from "react";
import { BsMoonFill } from "react-icons/bs";


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
                    <div onClick={props.toggle}>
                        <BsMoonFill />
                    </div>
                </MenuComponent>
                <BackgroundHeader className={anchorHeaderInView ? '' : 'translate'} />
            </HeaderComponent>
        </>                
    )
}