import { MDBContainer } from "mdbreact";
import { Link } from "react-router-dom";


const WeddingVideos = () => {
    
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
            text: "Deborah and Marvel",
            nickName: "wedding videos",
            imgUrl: "https://www.youtube.com/embed/ssV9ESVi9V0",
        },
        {
            name: 4,
            text: "#TEECHI 2020",
            nickName: "real estate",
            imgUrl: "https://www.youtube.com/embed/Zr51SWDIqyA",
        },
        {
            name: 5,
            text: "Lanre and Henry",
            nickName: "wedding videos",
            imgUrl: "https://www.youtube.com/embed/VReT2j2LMSU",
        },
        {
            name: 6,
            text: "#AdaObi",
            nickName: "real estate",
            imgUrl: "https://www.youtube.com/embed/hDxS_Xb03hE",
        }
        
    ];
    return (
        <MDBContainer>
            <h1 className='ImgGridTittle'>Wedding Videography</h1>
                <div className='VideoGrid WeddingVideoGrid'>
                    {GalleryImgs.map((GalleryImg, index) => (
                            <div key={GalleryImg.name + index} className='video-margin'>
                                <iframe width="100%" height="100%"
                                    className='gridVideo'
                                    src={GalleryImg.imgUrl}
                                    title={`${GalleryImg.name}`}
                                />
                                <h3 className='gridText'>{GalleryImg.text}</h3>
                            </div>
                    ))}
                </div>
        </MDBContainer>
    );
};
 
export default WeddingVideos;