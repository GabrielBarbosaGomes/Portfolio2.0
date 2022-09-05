import { Button } from "../Button";
import { ContentProject, ImgProject, ProjectItems, ProjectsComponents, ProjectWrappers, Title, TitleProjects, WrapperContent } from "./styles";
import {ImGithub} from "react-icons/Im";
import {BiRightArrowAlt} from "react-icons/Bi";
import Qsaude from "../../assets/imagens/projetoQsaude.png";
import cursos from "../../assets/imagens/cursos.png";
import portfolio from "../../assets/imagens/portifolio1.png";
import cars from "../../assets/imagens/cars.png";
import { DiHtml5 } from "react-icons/di";
import { IoLogoCss3 } from "react-icons/io";
import { SiReact, SiTailwindcss, SiGraphql, SiJavascript, SiStyledcomponents } from "react-icons/si";

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
                            <TitleProjects>
                                Projeto Qsaude 
                                <div className="scale">
                                    <DiHtml5 /> <IoLogoCss3 />
                                </div>                               
                            </TitleProjects>
                            <p>
                                Neste projeto recriei o layout do site Qsaude, ultilizando apenas Html e CSS, projeto responsivo.
                            </p>
                        </div>
                        <a href="https://projeto-qsaude.vercel.app/" target="_blank" rel="noopener noreferrer">Ver mais <BiRightArrowAlt /></a>
                    </ContentProject>                    

                    <ImgProject className="scale">
                        <img src={Qsaude}/>
                    </ImgProject>
                </ProjectItems>

                <ProjectItems>
                    <ContentProject>
                        <div>
                            <TitleProjects>
                                Projeto Tela de inscrição/aulas 
                                <div className="scale">
                                    <DiHtml5 /> <IoLogoCss3 /> <SiJavascript /> <SiReact /> <SiTailwindcss /> <SiGraphql />
                                </div>                                
                            </TitleProjects>
                            <p>
                                is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen 
                            </p>
                        </div>
                        <a href="https://project-curso.vercel.app/" target="_blank" rel="noopener noreferrer">Ver mais <BiRightArrowAlt /></a>
                    </ContentProject>

                    <ImgProject className="scale">
                        <img src={cursos}/>
                    </ImgProject>
                </ProjectItems>

                <ProjectItems>
                    <ContentProject>
                        <div>
                            <TitleProjects>
                                Projeto portfólio 1.0 
                                <div className="scale">
                                    <DiHtml5 /> <IoLogoCss3 /> <SiJavascript />
                                </div>                                
                            </TitleProjects>
                            <p>
                                is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen 
                            </p>
                        </div>
                        <a href="https://portifolio-gabriel-gabrielbarbosagomes.vercel.app/" target="_blank" rel="noopener noreferrer">Ver mais <BiRightArrowAlt /></a>
                    </ContentProject>

                    <ImgProject className="scale">
                        <img src={portfolio}/>
                    </ImgProject>
                </ProjectItems>

                <ProjectItems>
                    <ContentProject>
                        <div>
                            <TitleProjects>
                                Projeto Carros 
                                <div className="scale">
                                    <DiHtml5 /> <IoLogoCss3 /> <SiJavascript /> <SiReact /> <SiStyledcomponents /> <SiGraphql />
                                </div>                                
                            </TitleProjects>
                            <p>
                            Neste projeto criei uma tela de cadastro com opções de criar, editar e excluir usuário, e os dados são guardados no localStorage, utilizando Html, CSS e JS
                            </p>
                        </div>
                        <a href="https://cyber-genios-ps.vercel.app/" target="_blank" rel="noopener noreferrer">Ver mais <BiRightArrowAlt /></a>
                    </ ContentProject>

                    <ImgProject className="scale">
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