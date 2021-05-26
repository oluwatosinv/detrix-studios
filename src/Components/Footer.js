import {  MDBContainer, MDBIcon } from
"mdbreact";


const Footer = () => {
    return ( 
        <MDBContainer className='footer'>
            <div>
                <p>CONNECT WITH US</p>
                <div className='footer-icon'>
                    <a>
                        <MDBIcon fab icon="instagram" />
                    </a>
                    <a>
                        <MDBIcon fab icon="facebook-square"  />
                    </a>
                    <a>
                        <MDBIcon fab icon="youtube" />
                    </a>
                    <a>
                        <MDBIcon fab icon="linkedin" />
                    </a>
                </div>
            </div>
            <div className='inner2'>
                <p>Contact Us</p>
                <p>plot 33 ayo balogun avenue lagos</p>
                <p>
                    <MDBIcon icon="phone-alt" />
                    <a href="tel:+23407038124086" className='contact'> +23407038124086</a>
                </p>
                <p>
                    Email: 
                    <a href="mailto:info@detrixstudios.com" className='contact'>info@detrixstudios.com</a><br></br>
                </p>
            </div>
            
        </MDBContainer>
     );
}
 
export default Footer;