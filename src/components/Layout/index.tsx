import { Parallax } from 'react-scroll-parallax';
import { useState } from "react";
import { Contact } from "../Contact";
import { Footer } from "../Footer";
import { Hero } from "../Hero";
import { Knowledge } from "../knowledge";
import { Menu } from "../Menu";
import { Projects } from "../Projects/indext";
import { SobreMim } from "../SobreMim";
import { LayoutComponent } from "./styles";


export function Layout(props: any) {
    const [noturn, setNoturn] = useState(false);

    const toggle = () => {
        setNoturn(!noturn);
        var body = document.querySelectorAll('body')[0];
        body.style.background = noturn ? "#fff" : "#050505";
        // Google Chrome Fix.
        document.querySelectorAll('section').forEach(sec => {
            sec.parentElement?.setAttribute("class", "back");
        })
    }

    return (
        <LayoutComponent className={noturn ? 'test' : ''}>
            <Menu toggle={toggle} />
            
            <Parallax speed={-18} className="back">
                <Hero />
            </Parallax>

            <Parallax speed={10} className="back">
                <SobreMim />
            </Parallax>

            <Parallax speed={-6} className="back">
                <Knowledge />
            </Parallax>

            <Parallax speed={20} className="back">
                <Projects />
            </Parallax>

            <Parallax speed={5} className="back">
                <Contact />
            </Parallax>

            <Parallax speed={20} className="back">
                <Footer />
            </Parallax>

        </LayoutComponent>
    )
}