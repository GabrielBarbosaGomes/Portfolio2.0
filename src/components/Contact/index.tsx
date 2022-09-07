import { ContactComponent, ContactItem, Title, WrapperContact } from "./styles"
import { ImWhatsapp } from "react-icons/Im";
import { MdOutlineMailOutline, MdLocationPin } from "react-icons/Md";

export function Contact(){
    return(
        <ContactComponent className="paddingContainer" id="contact">
            <Title>
                <h2>Fale comigo</h2>
                <span>Você pode entrar em contato comigo pelos seguintes canais</span>
            </Title>

            <WrapperContact>
                <ContactItem>
                    <ImWhatsapp />
                    <div>
                        <h3>Telefone / WhastApp</h3>
                        <span>(34) 99647-7945</span>
                    </div>
                </ContactItem>

                <ContactItem>
                    <MdOutlineMailOutline />
                    <div>
                        <h3>Email</h3>
                        <span>gabryel122crf@gmail.com</span>
                    </div>
                </ContactItem>

                <ContactItem>
                    <MdLocationPin />
                    <div>
                        <h3>Cidade</h3>
                        <span>Uberlândia - Minas Gerais</span>
                    </div>
                </ContactItem>
            </WrapperContact>
        </ContactComponent>
    )
}