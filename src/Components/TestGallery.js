import Lightroom from "react-lightbox-gallery";
export default function Testgallery() {
  var images = [
    // {
    //   src:
    //     "https://res.cloudinary.com/tosin/image/upload/v1621942917/detrix/lolade%20and%20lanre/P1070065.jpg",
    //   desc: "Person wearing shoes",
    //   sub: "Gift Habeshaw"
    // },
    {
      src: "https://res.cloudinary.com/tosin/image/upload/v1622628578/detrix/lolade%20and%20lanre/P1120768a.jpg",
      desc: "Blonde woman wearing sunglasses smiling at the camera ",
      sub: "Dmitriy Frantsev",
    },
    {
      src: "https://res.cloudinary.com/tosin/image/upload/v1621942916/detrix/lolade%20and%20lanre/P1060845.jpg",
      desc: "Man and woman passing by store",
      sub: "Harry Cunningham",
    },
    {
      src: "https://res.cloudinary.com/tosin/image/upload/v1621942914/detrix/lolade%20and%20lanre/P1060727.jpg",
      desc: "Jaipur , Rajasthan India",
      sub: "Liam Baldock",
    },
    {
      src: "https://res.cloudinary.com/tosin/image/upload/v1621942910/detrix/lolade%20and%20lanre/P1060795.jpg",
      sub: "Verne Ho",
    },
    {
      src: "https://res.cloudinary.com/tosin/image/upload/v1621942909/detrix/lolade%20and%20lanre/P1060546.jpg",
      desc: "Rann of kutch , India",
      sub: "Hari Nandakumar",
    },
    {
      src: "https://res.cloudinary.com/tosin/image/upload/v1621942906/detrix/lolade%20and%20lanre/P1060213.jpg",
      sub: "Jyotirmoy Gupta",
    },
    {
      src: "https://res.cloudinary.com/tosin/image/upload/v1621942906/detrix/lolade%20and%20lanre/P1060335.jpg",
      sub: "Tom & Sini",
    },
    {
      src: "https://res.cloudinary.com/tosin/image/upload/v1621942906/detrix/lolade%20and%20lanre/P1060516.jpg",
      sub: "Tom & Sini",
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
    <div className='App'>
      <Lightroom images={images} settings={settings} />
    </div>
  );
}
