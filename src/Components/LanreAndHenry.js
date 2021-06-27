import { MDBContainer } from "mdbreact";
import { Link } from "react-router-dom";
import LiteYouTubeEmbed from "react-lite-youtube-embed";
import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css";

const Lanre = () => {
  const GalleryImgs = [
    {
      name: 1,
      text: "The Vow",
      nickName: "videograhy",
      imgUrl: "VReT2j2LMSU",
    },
    {
      name: 2,
      text: "Wedding",
      nickName: "Videography",
      imgUrl: "Hey-rDqyGg4",
    },
  ];
  return (
    <MDBContainer>
      <h1 className='ImgGridTittle'>Wemimo And Ayotunde</h1>
      <div className='VideoGrid'>
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

export default Lanre;
