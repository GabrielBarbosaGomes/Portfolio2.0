import { BsBraces } from "react-icons/bs";
import { CgChevronDown, CgChevronUp } from "react-icons/cg";
import { Content, KnowComponents, SkillBar, Skills, SkillTitle, SkillWrapper, Title, WrapperContent, WrapperAnimation } from "./styles";
import { useState } from "react";


export function Knowledge(){
    const [active, setActive] = useState(false)

    function toggleMode() {
        setActive(!active);
    }

    return(
        <KnowComponents className="paddingContainer">
            <Title>
                <h2>Conhecimentos</h2>
                <span>
                    Meu nível técnico
                </span>
            </Title>

            <WrapperContent>
                <BsBraces />
                <Content>
                    <h1>Dev Front-end</h1>
                    <span>Desde novembro de 2021 estudando e fazendo aplicações web</span>
                </Content>
                {active? <CgChevronUp onClick={toggleMode} />: < CgChevronDown onClick={toggleMode} />}
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
                                <h3>SCSS</h3>
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
                    <WrapperAnimation>
                        <h3>HTML</h3>
                        <h3>CSS</h3>
                        <h3>SCSS</h3>
                        <h3>JavaScript</h3>
                        <h3>ReactJs</h3>
                        <h3>Mysql</h3>
                    </WrapperAnimation>
                }
            </WrapperContent>
        </KnowComponents>
    )
}