import { MDBContainer, MDBIcon } from
    "mdbreact";

const About = () => {
    return (
        <MDBContainer>
            <h1 className='about-title'>About Us</h1>
            <div className='about-grid'>
                <img className='about-image' src="https://res.cloudinary.com/tosin/image/upload/v1622300052/detrix/P1020031-1024x912.jpg"/>
                <div>
                    <h2 className='about-grid-tittle'>MY NAME IS FABOADE ANUOLUWAPO, I’M THE CREATIVE DIRECTOR OF DETRIX STUDIOS.
                    </h2>
                    <p>Detrix Studios is a team of seasoned Videographers and photographers </p>
                </div>
            </div>
        </MDBContainer>
    );
}
 
export default About;