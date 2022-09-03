import { Button } from "../Button";
import { ContentProject, ImgProject, ProjectItems, ProjectsComponents, ProjectWrappers, Title, WrapperContent } from "./styles";
import {ImGithub} from "react-icons/Im";
import {BiRightArrowAlt} from "react-icons/Bi";
import Qsaude from "../../assets/imagens/Qsaude.png";
import cursos from "../../assets/imagens/cursos.png";
import portfolio from "../../assets/imagens/portfolio1.0.png";
import cars from "../../assets/imagens/cars.png";

export function Projects(){
    return(
        <ProjectsComponents className="paddingContainer" id="projects">
            <Title>
                <h2>Projetos</h2>
                <span>Alguns projetos desenvolvidos por mim</span>
            </Title>

            <ProjectWrappers>
                <ProjectItems>
                    <ContentProject>
                        <div>
                            <h3>Projeto Qsaude</h3>
                            <p>
                                Neste projeto recriei o layout do site Qsaude, ultilizando apenas Html e CSS, projeto responsivo.
                            </p>
                        </div>
                        <a href="https://projeto-qsaude.vercel.app/" target="_blank" rel="noopener noreferrer">Ver mais <BiRightArrowAlt /></a>
                    </ContentProject>                    

                    <ImgProject>
                        <img src={Qsaude}/>
                    </ImgProject>
                </ProjectItems>

                <ProjectItems>
                    <ContentProject>
                        <div>
                            <h3>Projeto Tela de inscrição/aulas</h3>
                            <p>
                                is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen 
                            </p>
                        </div>
                        <a href="https://project-curso.vercel.app/" target="_blank" rel="noopener noreferrer">Ver mais <BiRightArrowAlt /></a>
                    </ContentProject>

                    <ImgProject>
                        <img src={cursos}/>
                    </ImgProject>
                </ProjectItems>

                <ProjectItems>
                    <ContentProject>
                        <div>
                            <h3>Projeto portfólio 1.0</h3>
                            <p>
                                is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen 
                            </p>
                        </div>
                        <a href="https://portifolio-gabriel-gabrielbarbosagomes.vercel.app/" target="_blank" rel="noopener noreferrer">Ver mais <BiRightArrowAlt /></a>
                    </ContentProject>

                    <ImgProject>
                        <img src={portfolio}/>
                    </ImgProject>
                </ProjectItems>

                <ProjectItems>
                    <ContentProject>
                        <div>
                            <h3>Projeto Carros</h3>
                            <p>
                            Neste projeto criei uma tela de cadastro com opções de criar, editar e excluir usuário, e os dados são guardados no localStorage, utilizando Html, CSS e JS
                            </p>
                        </div>
                        <a href="https://cyber-genios-ps.vercel.app/" target="_blank" rel="noopener noreferrer">Ver mais <BiRightArrowAlt /></a>
                    </ ContentProject>

                    <ImgProject>
                        <img src={cars}/>
                    </ImgProject>
                </ProjectItems>
            </ProjectWrappers>
            
            <WrapperContent>
                <p>Acesso ao meu GIT para ver meus projetos</p>
                <a href="https://github.com/GabrielBarbosaGomes" target="_blank" rel="noopener noreferrer">
                    <Button className="button">
                        ir para o GitHub
                        <ImGithub />
                    </Button>
                </a>
            </WrapperContent>            
        </ProjectsComponents>
    )
}