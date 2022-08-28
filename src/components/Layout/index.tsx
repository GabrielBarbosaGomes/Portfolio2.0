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
    
    const toggle = () =>{
        setNoturn(!noturn);
    }

    return (
        <LayoutComponent className={noturn? 'test' : ''}>
            <Menu toggle={toggle}/>
            <Hero />
            <SobreMim />
            <Knowledge />
            <Projects />
            <Contact />
            <Footer />
        </LayoutComponent>
    )
}