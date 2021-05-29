import { MDBContainer } from "mdbreact";
import { Link } from "react-router-dom";


const NonWeddingVideos = () => {
    
    const GalleryImgs = [
        {
            name: 1,
            text: "Wemimo and Ayotunde",
            nickName: "wedding videos",
            imgUrl: "https://www.youtube.com/embed/IZfJcZcUOO0",
        },
        {
            name: 2,
            text: "Adeola and Olabode",
            nickName: "wedding videos",
            imgUrl: "https://www.youtube.com/embed/rklWfmt9uA4",
        },
        {
            name: 3,
            text: "Hampton Court",
            nickName: "Real estate videos",
            imgUrl: "https://www.youtube.com/embed/fV35WK4clZU",
        },
        {
            name: 4,
            text: "Inkmade Documentry",
            nickName: "Documentary",
            imgUrl: "https://www.youtube.com/embed/IlPvI4hAxe8",
        },
        {
            name: 5,
            text: "E book Business video",
            nickName: "E book Business video",
            imgUrl: "https://www.youtube.com/embed/gXJJUeaMaVw",
        },
        {
            name: 6,
            text: "Traditional Wedding",
            nickName: "real estate",
            imgUrl: "https://www.youtube.com/embed/hDxS_Xb03hE",
        }
        
    ];
    return (
        <MDBContainer>
            <h1 className='ImgGridTittle'>Non Wedding Videography</h1>
                <div className='VideoGrid WeddingVideoGrid'>
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
 
export default NonWeddingVideos;