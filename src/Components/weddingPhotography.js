import CarouselPage from "./Carousel";
import FormPage1 from "./Form2";
import WeddingVideos from "./WeddingVideos";
import { MDBContainer } from "mdbreact";

const weddingPhotography = () => {
  return (
    <div>
      <MDBContainer className='promos'>
        <p className='promo'>
          Hey Welcome,
          <br />
          You are here because you clicked our link. We are delighted to have
          you here. Please fill the form below to start your booking process.
          Looking forward to cover your special day. Cheers!!!
        </p>
        <h3 className='text-center'>Enjoy up to 40% if you book now!!!!</h3>
      </MDBContainer>
      <FormPage1 />
      <CarouselPage />
      <WeddingVideos />
    </div>
  );
};

export default weddingPhotography;
