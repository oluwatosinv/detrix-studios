import Lightroom from "react-lightbox-gallery";
import { MDBContainer } from "mdbreact";

export default function Muse() {
  var images = [
    // {
    //   src:
    //     "https://res.cloudinary.com/tosin/image/upload/v1622926768/detrix/Muse/P1130201.jpg",
    //   desc: "Person wearing shoes",
    //   sub: "Gift Habeshaw"
    // },
    {
      src: "https://res.cloudinary.com/tosin/image/upload/v1622926767/detrix/Muse/P1120781.jpg",
      desc: "Wedding",
      sub: "Bridal Bloom",
    },
    {
      src: "https://res.cloudinary.com/tosin/image/upload/v1622926768/detrix/Muse/P1130071.jpg",
      desc: "Wedding",
      sub: "Bridal Bloom",
    },
    {
      src: "https://res.cloudinary.com/tosin/image/upload/v1622926768/detrix/Muse/P1130245.jpg",
      desc: "Wedding",
      sub: "Bridal Bloom",
    },
    {
      src: "https://res.cloudinary.com/tosin/image/upload/v1622926767/detrix/Muse/P1120798.jpg",
      desc: "Wedding",
      sub: "Bridal Bloom",
    },
    {
      src: "https://res.cloudinary.com/tosin/image/upload/v1622926767/detrix/Muse/P1120827.jpg",
      desc: "wedding",
      sub: "Bridal Bloom",
    },
    {
      src: "https://res.cloudinary.com/tosin/image/upload/v1622926768/detrix/Muse/P1130240.jpg",
      desc: "Wedding",
      sub: "Bridal Bloom",
    },
    {
      src: "https://res.cloudinary.com/tosin/image/upload/v1622926767/detrix/Muse/P1120693.jpg",
      desc: "Wedding",
      sub: "Bridal Bloom",
    },
    {
      src: "https://res.cloudinary.com/tosin/image/upload/v1622926766/detrix/Muse/P1120768.jpg",
      desc: "Wedding",
      sub: "Bridal Bloom",
    },
    {
      src: "https://res.cloudinary.com/tosin/image/upload/v1622926768/detrix/Muse/P1130201.jpg",
      desc: "Wedding",
      sub: "Bridal Bloom",
    },
    {
      src: "https://res.cloudinary.com/tosin/image/upload/v1622926766/detrix/Muse/P1120649.jpg",
      desc: "Wedding",
      sub: "Bridal Bloom",
    },
    {
      src: "https://res.cloudinary.com/tosin/image/upload/v1622926766/detrix/Muse/P1120664.jpg",
      desc: "Wedding",
      sub: "Bridal Bloom",
    },
  ];
  var settings = {
    columnCount: {
      default: 3,
      mobile: 3,
      tab: 4,
    },
    mode: "dark",
  };
  return (
    <MDBContainer className='galleyLolade'>
      <h1 className='galleryTittle'>Bridal Bloom</h1>
      <Lightroom images={images} settings={settings} />
    </MDBContainer>
  );
}
