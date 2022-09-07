import { ButtonComponent } from "./styles";

export function Button(props: any){
    return(
        <ButtonComponent>{props.children}</ButtonComponent>
    )
}