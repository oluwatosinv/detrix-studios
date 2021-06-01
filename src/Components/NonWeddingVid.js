import { CropRotateOutlined } from "@material-ui/icons";
import { MDBContainer } from "mdbreact";
import { Link } from "react-router-dom";

const Corporate = () => {
    
    const GalleryImgs = [
        {
            name: 1,
            text: "Hampton Court",
            nickName: "Videos",
            imgUrl: "https://www.youtube.com/embed/fV35WK4clZU",
        },
        {
            name: 2,
            text: "Documentary",
            nickName: "real estate Videos",
            imgUrl: "https://www.youtube.com/embed/IlPvI4hAxe8",
        },
        {
            name: 3,
            text: "E Book Business Video",
            nickName: "Videos",
            imgUrl: "https://www.youtube.com/embed/gXJJUeaMaVw",
        },
        {
            name: 4,
            text: "Documentary",
            nickName: "real estate Videos",
            imgUrl: "https://www.youtube.com/embed/IlPvI4hAxe8",
        },
        {
            name: 5,
            text: "Documentary",
            nickName: "real estate Videos",
            imgUrl: "https://www.youtube.com/embed/IlPvI4hAxe8",
        },
        {
            name: 6,
            text: "Documentary",
            nickName: "real estate Videos",
            imgUrl: "https://www.youtube.com/embed/XBg_kglBF0k",
        }
    ];
    return (
        <MDBContainer>
            <h1 className='ImgGridTittle'>Non Wedding Videos</h1>
                <div className='VideoGrid lowerVideoGrid'>
                    {GalleryImgs.map((GalleryImg, index) => (
                            <div key={GalleryImg.name + index} className='video-margin'>
                                <iframe width="100%" height="100%"
                                    className='gridVideo'
                                    src={GalleryImg.imgUrl}
                                    alt={`${GalleryImg.name}`}
                                />
                                <h3 className='gridText'>{GalleryImg.text}</h3>
                            </div>
                    ))}
                </div>
        </MDBContainer>
    );
};
 
export default Corporate;