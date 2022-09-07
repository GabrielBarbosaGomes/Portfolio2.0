import { Button } from "../Button";
import { ContentProject, ImgProject, ProjectItems, ProjectsComponents, ProjectWrappers, Title, TitleProjects, WrapperContent } from "./styles";
import { ImGithub } from "@react-icons/all-files/im/ImGithub";
import { BiRightArrowAlt } from "@react-icons/all-files/bi/BiRightArrowAlt";
import Qsaude from "../../assets/imagens/projetoQsaude.png";
import cursos from "../../assets/imagens/cursos.png";
import portfolio from "../../assets/imagens/portifolio1.png";
import cars from "../../assets/imagens/cars.png";
import { DiHtml5 } from "@react-icons/all-files/di/DiHtml5";
import { IoLogoCss3 } from "@react-icons/all-files/io/IoLogoCss3";
import { SiReact } from "@react-icons/all-files/si/SiReact";
import { SiTailwindcss } from "@react-icons/all-files/si/SiTailwindcss";
import { SiGraphql } from "@react-icons/all-files/si/SiGraphql";
import { SiJavascript } from "@react-icons/all-files/si/SiJavascript";

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
                                Esse é um projeto da rocketseat, que eu achei interessante e quis realizar, eles disponibilizaram o figma por um período de tempo, e eu me desafiei, até o momento ele tem 2 telas, uma de inscrição e a outra de aulas, alimentada por uma API, utilizei nesse projeto para estilizar o tailwind, para consultar as informações da API estou utilizando graphQL, ainda estou transformando em responsivo
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
                                Esta foi a primeira versão de portfólio que eu criei, nele eu utilizei, apenas HTML, CSS e JavaScript, projeto com um ar muito amador, porém através dele aprendi muito sobre designer, combinações de cores, padronizações e muito mais... Projeto responsivo.
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
                                    <DiHtml5 /> <IoLogoCss3 /> <SiJavascript /> <SiReact /> <SiGraphql />
                                </div>                                
                            </TitleProjects>
                            <p>
                                Projeto criado para um processo seletivo que participei, e nele utilizei, HTML, CSS, SASS, React, CSS feito com Styled Components, informações dos automóveis passados por uma API, e para a consulta da API utilizei o graphQL, projeto responsivo
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