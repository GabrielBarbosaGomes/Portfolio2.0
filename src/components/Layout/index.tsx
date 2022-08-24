import { Hero } from "../Hero";
import { Menu } from "../Menu";
import { LayoutComponent } from "./styles";

export function Layout(props: any) {
    return (
        <LayoutComponent>
            <Menu />
            <Hero />
        </LayoutComponent>
    )
}