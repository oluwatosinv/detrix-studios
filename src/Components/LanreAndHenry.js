import { MDBContainer } from "mdbreact";
import { Link } from "react-router-dom";

const Lanre = () => {
    
    const GalleryImgs = [
        {
            name: 1,
            text: "The Vow",
            nickName: "videograhy",
            imgUrl: "https://www.youtube.com/embed/VReT2j2LMSU",
        },
        {
            name: 2,
            text: "Wedding",
            nickName: "Videography",
            imgUrl: "https://www.youtube.com/embed/Hey-rDqyGg4",
        }
    ];
    return (
        <MDBContainer>
            <h1 className='ImgGridTittle'>Wemimo And Ayotunde</h1>
                <div className='VideoGrid'>
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
 
export default Lanre;