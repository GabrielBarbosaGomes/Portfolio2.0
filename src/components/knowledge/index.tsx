import { GiBrain } from "@react-icons/all-files/gi/GiBrain";
import { CgChevronDown } from "@react-icons/all-files/cg/CgChevronDown";
import { Content, KnowComponents, SkillBar, Skills, SkillTitle, SkillWrapper, Title, WrapperContent } from "./styles";
import { useState } from "react";


export function Knowledge(){
    const [active, setActive] = useState(false)

    function toggleMode() {
        setActive(!active);
    }

    return(
        <KnowComponents className="paddingContainer" id="skill">
            <Title>
                <h2>Conhecimentos</h2>
                <span>
                    Meu nível técnico
                </span>
            </Title>

            <WrapperContent className={active? 'space' : ''}>
                <GiBrain />
                <Content >
                    <h1>Dev Front-end</h1>
                    <span>Desde novembro de 2021 estudando e fazendo aplicações web</span>
                </Content>
                <CgChevronDown onClick={toggleMode} className={active? 'rotate click' : 'click'} />
                {
                    active? 
                    <Skills>
                        <SkillWrapper>
                            <SkillTitle>
                                <h3>HTML</h3>
                                <span>avançado</span>
                            </SkillTitle>
                            <SkillBar>
                                <span className="avancado"></span>
                            </SkillBar>
                        </SkillWrapper>

                        <SkillWrapper>
                            <SkillTitle>
                                <h3>CSS</h3>
                                <span>avançado</span>
                            </SkillTitle>
                            <SkillBar>
                                <span className="avancado"></span>
                            </SkillBar>
                        </SkillWrapper>

                        <SkillWrapper>
                            <SkillTitle>
                                <h3>SASS</h3>
                                <span>avançado</span>
                            </SkillTitle>
                            <SkillBar>
                                <span className="avancado"></span>
                            </SkillBar>
                        </SkillWrapper>

                        <SkillWrapper>
                            <SkillTitle>
                                <h3>JavaScript</h3>
                                <span>Intermediario</span>
                            </SkillTitle>
                            <SkillBar>
                                <span className="intermediario"></span>
                            </SkillBar>
                        </SkillWrapper>

                        <SkillWrapper>
                            <SkillTitle>
                                <h3>ReactJs</h3>
                                <span>Intermediario</span>
                            </SkillTitle>
                            <SkillBar>
                                <span className="intermediario"></span>
                            </SkillBar>
                        </SkillWrapper>

                        <SkillWrapper>
                            <SkillTitle>
                                <h3>Mysql</h3>
                                <span>Básico</span>
                            </SkillTitle>
                            <SkillBar>
                                <span className="basico"></span>
                            </SkillBar>
                        </SkillWrapper>
                    </Skills>                   
                    : 
                    ""
                }
            </WrapperContent>
        </KnowComponents>
    )
}