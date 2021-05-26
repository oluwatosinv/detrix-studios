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
            <p className='carousel-text-inner'>Accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi at vero eos et vitae feugiat magna, ut ligula Accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi at vero eos et vitae feugiat magna, ut ligula</p>
          </MDBView>
        </MDBCarouselItem>
        <MDBCarouselItem itemId="2" className='carousel-text'>
        <MDBView>
            <h3 className="h3-responsive">Testimonials</h3>
            <p className='carousel-text-inner'>Accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi at vero eos et vitae feugiat magna, ut ligula Accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi at vero eos et vitae feugiat magna, ut ligula</p>
        </MDBView>
        </MDBCarouselItem>
        <MDBCarouselItem itemId="3" className='carousel-text'>
        <MDBView>
            <h3 className="h3-responsive">Testimonials</h3>
            <p className='carousel-text-inner'>Accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi at vero eos et vitae feugiat magna, ut ligula Accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi at vero eos et vitae feugiat magna, ut ligula</p>
            <span className='testimonial-name'>Tola and Tayo</span>
        </MDBView>
        </MDBCarouselItem>
      </MDBCarouselInner>
    </MDBCarousel>
    </MDBContainer>
  );
}

export default CarouselPage;