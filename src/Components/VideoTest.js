import React from "react";
import LiteYouTubeEmbed from "react-lite-youtube-embed";
import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css";
import { MDBContainer } from "mdbreact";

const VideoTest = () => {
  const GalleryImgs = [
    {
      name: 1,
      text: "Nkeko Drinking Game",
      nickName: "Videos",
      imgUrl: "wW1dqckSlLI",
    },
    {
      name: 2,
      text: "Business Video",
      nickName: "wedding videos",
      imgUrl: "XBg_kglBF0k",
    },
    {
      name: 3,
      text: "Hampton Court",
      nickName: "Real estate videos",
      imgUrl: "fV35WK4clZU",
    },
    // {
    //     name: 4,
    //     text: "Inkmade Documentry",
    //     nickName: "Documentary",
    //     imgUrl: "https://www.youtube.com/embed/IlPvI4hAxe8",
    // },
    // {
    //     name: 5,
    //     text: "E book Business video",
    //     nickName: "E book Business video",
    //     imgUrl: "https://www.youtube.com/embed/gXJJUeaMaVw",
    // },
    // {
    //     name: 6,
    //     text: "SMILE & SHINE BOOK LAUNCH",
    //     nickName: "Book lauch Videos",
    //     imgUrl: "https://www.youtube.com/embed/JxBW3adCsvc",
    // }
  ];

  return (
    <MDBContainer>
      <h1 className='ImgGridTittle'>Non Wedding Videos</h1>
      <div className='VideoGrid lowerVideoGrid'>
        {GalleryImgs.map((GalleryImg, index) => (
          <div key={GalleryImg.name + index} className='video-margin'>
            <LiteYouTubeEmbed
              id={GalleryImg.imgUrl}
              alt={`${GalleryImg.name}`}
              activeClass='lyt-activated' // Default as "lyt-activated", gives control to wrapper once clicked
              iframeClass='' // Default none, gives control to add a class to iframe element itself
              playerClass='lty-playbtn' // Default as "lty-playbtn" to control player button styles
              wrapperClass='yt-lite' // Default as "yt-lite" for the div wrapping the area, it is the most important class and needs extra attention, please refer to LiteYouTubeEmbed.css for a reference.
            />
            <h3 className='gridText'>{GalleryImg.text}</h3>
          </div>
        ))}
      </div>
    </MDBContainer>
  );
};

export default VideoTest;
