import { MDBContainer, MDBIcon } from
    "mdbreact";import { Link } from 'react-router-dom';

const About = () => {
    return (
        <MDBContainer>
            <h1 className='about-title'>About Us</h1>
            <div className='about-grid'>
                <img className='about-image' src="https://res.cloudinary.com/tosin/image/upload/v1622300052/detrix/P1020031-1024x912.jpg"/>
                <div>
                    <h2 className='about-grid-tittle'>MY NAME IS FABOADE ANUOLUWAPO, I’M THE CREATIVE DIRECTOR OF DETRIX STUDIOS.
                    </h2>
                    <p>At Detrix Studios, we are a  young and vibrant team of professional Photographers and Cinematographers with specialty in documenting weddings, events , portrait and documentary.</p>

                    <p>We have been capturing and preserving the memories of several amazing clients since the year 2018
                    </p>
                    <p>We are available to travel to document your special day because we believe boundaries cannot hinder our passion.</p>

                    <p>We would love to hear from you. </p>
                    <p><Link to='/ContactUs' className='contact-title about-contact-us'>
                    Click here 
                </Link>
                    to contact us. CHEERS!!!</p>
                </div>
            </div>
        </MDBContainer>
    );
}
 
export default About;