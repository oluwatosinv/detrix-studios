import {  MDBContainer, MDBIcon } from
"mdbreact";
import FormPage from "./Form1";


const ContactUs = () => {
    return ( 
        <MDBContainer>
            <div className='contact-img'>
                <h1 className='contact-tittle-text'>Contact Us</h1>
            </div>
            <FormPage />
        </MDBContainer>
    );
}
 
export default ContactUs;