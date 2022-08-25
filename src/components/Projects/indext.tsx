import { Button } from "../Button";
import { ProjectsComponents, Title, WrapperContent } from "./styles";
import {GrGithub} from "react-icons/gr";

export function Projects(){
    return(
        <ProjectsComponents className="paddingContainer">
            <Title>
                <h2>Projetos</h2>
                <span>Alguns projetos desenvolvidos por mim</span>
            </Title>

            <WrapperContent>
                <p>Acesso ao meu GIT para ver meus projetos</p>
                <Button className="button">
                    ir para o GitHub
                    <GrGithub />
                </Button>
            </WrapperContent>            
        </ProjectsComponents>
    )
}