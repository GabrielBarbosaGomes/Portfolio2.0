import { Parallax } from 'react-scroll-parallax';
import { useState } from "react";
import { Contact } from "../Contact";
import { Footer } from "../Footer";
import { Hero } from "../Hero";
import { Knowledge } from "../knowledge";
import { Menu } from "../Menu";
import { Projects } from "../Projects/indext";
import { AboutMe } from "../AboutMe";
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
            
           
                <Hero />
           

           
                <AboutMe />
           

            
                <Knowledge />
            

            
                <Projects />
            

         
                <Contact />
            

            
                <Footer />
           

        </LayoutComponent>
    )
}