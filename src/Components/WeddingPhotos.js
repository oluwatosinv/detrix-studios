import Lightroom from "react-lightbox-gallery";
import { MDBContainer } from "mdbreact";


export default function WeddingPhotos() {
  var images = [
    // {
    //   src:
    //     "https://res.cloudinary.com/tosin/image/upload/v1622926768/detrix/Muse/P1130201.jpg",
    //   desc: "Person wearing shoes",
    //   sub: "Gift Habeshaw"
    // },
    {
      src:
        "https://res.cloudinary.com/tosin/image/upload/v1622237542/detrix/CHICHI/P1190452.jpg",
      desc: "Wedding",
      sub: "Bridal Bloom"
    },
    {
      src:
      "https://res.cloudinary.com/tosin/image/upload/v1621891681/detrix/P1190089_1.jpg",
      desc: "Wedding",
      sub: "Bridal Bloom"
    },
    {
      src:
      "https://res.cloudinary.com/tosin/image/upload/v1622630451/detrix/P1130106.jpg",
      desc: "Wedding",
      sub: "Bridal Bloom"
    },
    {
      src:
      "https://res.cloudinary.com/tosin/image/upload/v1624816421/detrix/WALE%20AKINBOBOLA/P1080708.jpg",
      desc: "Wedding",
      sub: "Bridal Bloom"
    },
    {
      src:
        "https://res.cloudinary.com/tosin/image/upload/v1622630298/detrix/_P6A1992.jpg",
      desc: "wedding",
      sub: "Bridal Bloom"
    },
    {
      src:
      "https://res.cloudinary.com/tosin/image/upload/v1622237536/detrix/CHICHI/P1180833.jpg",
      desc: "Wedding",
      sub: "Bridal Bloom"
    },
    {
      src:
        "https://res.cloudinary.com/tosin/image/upload/v1621942914/detrix/lolade%20and%20lanre/P1070097.jpg",
      desc: "Wedding",
      sub: "Bridal Bloom"
    },
    {
      src:
        "https://res.cloudinary.com/tosin/image/upload/v1621792592/detrix/P1130245.jpg",
      desc: "Wedding",
      sub: "Bridal Bloom"
    },
    {
      src:
        "https://res.cloudinary.com/tosin/image/upload/v1622926766/detrix/Muse/P1120768.jpg",
      desc: "Wedding",
      sub: "Bridal Bloom"
    },
    {
        src:
          "https://res.cloudinary.com/tosin/image/upload/v1622630451/detrix/P1130106.jpg",
        desc: "Wedding",
        sub: "Bridal Bloom"
    },
    {
        src:
        "https://res.cloudinary.com/tosin/image/upload/v1621942906/detrix/lolade%20and%20lanre/P1060213.jpg",
        desc: "Wedding",
        sub: "Bridal Bloom"
    },
    {
      src:
      "https://res.cloudinary.com/tosin/image/upload/v1624816421/detrix/WALE%20AKINBOBOLA/P1080623.jpg",
      desc: "Wedding",
      sub: "Bridal Bloom"
    },
    {
        src:
          "https://res.cloudinary.com/tosin/image/upload/v1622237542/detrix/CHICHI/P1190452.jpg",
        desc: "Wedding",
        sub: "Bridal Bloom"
    },
  ];
  var settings = {
    columnCount: {
      default: 3,
      mobile: 3,
      tab: 4
    },
    mode: "dark"
  };
  return (
    <MDBContainer className='galleyLolade'>
      <h1 className='galleryTittle'>Photography</h1>
      <Lightroom images={images} settings={settings} />
    </MDBContainer>
  );
}



