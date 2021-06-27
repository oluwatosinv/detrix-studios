import { CropRotateOutlined } from "@material-ui/icons";
import { MDBContainer } from "mdbreact";
import { Link } from "react-router-dom";
import LiteYouTubeEmbed from "react-lite-youtube-embed";
import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css";

const Corporate = () => {
  const GalleryImgs = [
    {
      name: 1,
      text: "Hampton Court",
      nickName: "Videos",
      imgUrl: "fV35WK4clZU",
    },
    {
      name: 2,
      text: "Documentary",
      nickName: "real estate Videos",
      imgUrl: "IlPvI4hAxe8",
    },
    {
      name: 3,
      text: "E Book Business Video",
      nickName: "Videos",
      imgUrl: "gXJJUeaMaVw",
    },
    {
      name: 4,
      text: "Nkeko Drinking Game",
      nickName: "Videos",
      imgUrl: "wW1dqckSlLI",
    },
    {
      name: 5,
      text: "SMILE & SHINE BOOK LAUNCH",
      nickName: "Book lauch Videos",
      imgUrl: "JxBW3adCsvc",
    },
    {
      name: 6,
      text: "Nikkie Academy",
      nickName: "Business Videos",
      imgUrl: "XBg_kglBF0k",
    },
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

export default Corporate;
