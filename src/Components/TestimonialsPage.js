import React from "react";
import { MDBCarousel, MDBCarouselCaption, MDBCarouselInner, MDBCarouselItem, MDBView, MDBMask, MDBContainer } from
"mdbreact";

const CarouselPage = () => {
  return (
    <MDBContainer>
      <MDBCarousel
      activeItem={1}
      length={3}
      showControls={true}
      showIndicators={true}
      className="z-depth-1 testimonials"
    >
      <MDBCarouselInner>
        
        <MDBCarouselItem itemId="1" className='carousel-text'>
          <MDBView>
            <h3 className="h3-responsive">Testimonials</h3>
            <p className='carousel-text-inner'>I really appreciate it. it is so good! Even in short notice I was happy with your job to be honest
            Everyone commenting your job</p>
            <span className='testimonial-name'>Nike and dolapo</span>
          </MDBView>
        </MDBCarouselItem>
        <MDBCarouselItem itemId="2" className='carousel-text'>
        <MDBView>
            <h3 className="h3-responsive">Testimonials</h3>
            <p className='carousel-text-inner'>It’s very nice, Because of you I have fine pictures from that day,  I’ve been sending pictures since morning</p>
            <span className='testimonial-name'>Mrs Idowu @50</span>
        </MDBView>
        </MDBCarouselItem>
        
        <MDBCarouselItem itemId="3" className='carousel-text'>
        <MDBView>
            <h3 className="h3-responsive">Testimonials</h3>
            <p className='carousel-text-inner'>Good morning, thank you🙏🏼🙏🏼. The videos are nice, we want more 😁
            </p>
            <span className='testimonial-name'>Seyi and tayo</span>
        </MDBView>
        </MDBCarouselItem>
      </MDBCarouselInner>
    </MDBCarousel>
    </MDBContainer>
  );
}

export default CarouselPage;