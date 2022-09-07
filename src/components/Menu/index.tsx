import { MenuComponent, WrapperList, List, HeaderComponent, ItemList, BackgroundHeader, ToggleMode, Logo, MenuMobile, IconesMobile, BackDrop } from "./styles"
import { useInView } from "react-intersection-observer";
import { useState } from "react";
import { BsMoonFill } from "react-icons/bs";
import { FiSun } from "react-icons/Fi";
import logo from "../../assets/imagens/logo.svg"
import { BsGrid, BsFillGridFill } from "react-icons/bs";



export function Menu(props: any){
    const [active, setActive] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [anchorHeaderRef, anchorHeaderInView] = useInView({ threshold: 1 });

    function toggleMode() {
        setActive(!active);
    }

    function toggleMenu() {
        setMenuOpen(!menuOpen);
    }

    return(
        <>
            <span ref={anchorHeaderRef} className='scroll' ></span>
            <HeaderComponent>
                <MenuComponent className="paddingContainer">
                    <a><Logo src={logo}/></a>
                    <WrapperList className= {menuOpen ? "menuOpen" : "menuClose"}>
                        <List>
                            <ItemList><a href="#">Início</a></ItemList>
                            <ItemList><a href="#sobreMim">Sobre mim</a></ItemList>
                            <ItemList><a href="#skill">Habilidades</a></ItemList>
                            <ItemList><a href="#projects">Projetos</a></ItemList>
                            <ItemList><a href="#contact">Fale comigo</a></ItemList>
                        </List>
                    </WrapperList>
                    {active? 
                        <IconesMobile>
                            <div onClick={props.toggle}>
                                <ToggleMode onClick={toggleMode}><FiSun className="toggle" /></ToggleMode>
                            </div>

                            <MenuMobile>
                            <a onClick={toggleMenu}>
                                {menuOpen? 
                                    <BsGrid/>
                                    :
                                    <BsFillGridFill />
                                }                                    
                            </a>
                            </MenuMobile>
                        </IconesMobile>                        
                        :
                        <IconesMobile>
                            <div onClick={props.toggle}>
                                <ToggleMode onClick={toggleMode}><BsMoonFill className="toggle" /></ToggleMode>
                            </div>
                            
                            <MenuMobile>
                                <a onClick={toggleMenu}>
                                    {menuOpen? 
                                        <BsGrid/>
                                        :
                                        <BsFillGridFill />
                                    }
                                    
                                </a>
                            </MenuMobile>
                        </IconesMobile>                        
                    }
                    
                    <BackgroundHeader className={anchorHeaderInView ? '' : 'translate'} /> 
                </MenuComponent>                                        
            </HeaderComponent>
            <BackDrop onClick={toggleMenu} className={menuOpen ? 'active' : ''} />
        </>                
    )
}