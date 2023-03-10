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
            console.log("sec", sec)
            sec.parentElement?.setAttribute("class", "back");
        })
    }

    return (
        <LayoutComponent className={noturn ? 'dark pink' : ''}>
            <Menu toggle={toggle} />
            
            <Parallax speed={-18} >
                <Hero />
            </Parallax>

            <Parallax speed={10} >
                <SobreMim />
            </Parallax>

            <Parallax speed={0} >
                <Knowledge />
            </Parallax>

            <Parallax speed={20} >
                <Projects />
            </Parallax>

            <Parallax speed={5} >
                <Contact />
            </Parallax>

            <Parallax >
                <Footer />
            </Parallax>

        </LayoutComponent>
    )
}