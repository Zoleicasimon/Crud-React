//forma de desestructurar, solo trae el container desde React B.
//Es como un div
import {Container} from 'react-bootstrap'
const Footer = () => {
    return (
        <>
            <Container fluid className='p-0'>
                <div className='bg-dark text-white'> 
                <p>Todos los derechos reservados</p></div>
            </Container>
        </>
    );
};
 
export default Footer;