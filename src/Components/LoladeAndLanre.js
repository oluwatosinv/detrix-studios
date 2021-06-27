import Lightroom from "react-lightbox-gallery";
import { MDBContainer } from "mdbreact";

export default function LoladeAndLanre() {
  var images = [
    // {
    //   src:
    //     "https://res.cloudinary.com/tosin/image/upload/v1621942917/detrix/lolade%20and%20lanre/P1070065.jpg",
    //   desc: "Person wearing shoes",
    //   sub: "Gift Habeshaw"
    // },
    {
      src: "https://res.cloudinary.com/tosin/image/upload/v1622628578/detrix/lolade%20and%20lanre/P1120768a.jpg",
      desc: "Wedding",
      sub: "Lolade and Lanre",
    },
    {
      src: "https://res.cloudinary.com/tosin/image/upload/v1621942916/detrix/lolade%20and%20lanre/P1060845.jpg",
      desc: "Wedding",
      sub: "Lolade and Lanre",
    },
    {
      src: "https://res.cloudinary.com/tosin/image/upload/v1621942914/detrix/lolade%20and%20lanre/P1060727.jpg",
      desc: "Wedding",
      sub: "Lolade and Lanre",
    },
    {
      src: "https://res.cloudinary.com/tosin/image/upload/v1621942910/detrix/lolade%20and%20lanre/P1060795.jpg",
      desc: "Wedding",
      sub: "Lolade and Lanre",
    },
    {
      src: "https://res.cloudinary.com/tosin/image/upload/v1621942909/detrix/lolade%20and%20lanre/P1060546.jpg",
      desc: "wedding",
      sub: "Lolade and Lanre",
    },
    {
      src: "https://res.cloudinary.com/tosin/image/upload/v1621942906/detrix/lolade%20and%20lanre/P1060213.jpg",
      desc: "Wedding",
      sub: "Lolade and Lanre",
    },
    {
      src: "https://res.cloudinary.com/tosin/image/upload/v1621942906/detrix/lolade%20and%20lanre/P1060335.jpg",
      desc: "Wedding",
      sub: "Lolade and Lanre",
    },
    {
      src: "https://res.cloudinary.com/tosin/image/upload/v1621942906/detrix/lolade%20and%20lanre/P1060516.jpg",
      desc: "Wedding",
      sub: "Lolade and Lanre",
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
      <h1 className='galleryTittle'>Lolade and Lanre</h1>
      <Lightroom images={images} settings={settings} />
    </MDBContainer>
  );
}
