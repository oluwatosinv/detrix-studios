import { MDBContainer } from "mdbreact";
import { Link } from "react-router-dom";

const Wemimo = () => {
    
    const GalleryImgs = [
        {
            name: 1,
            text: "White Wedding",
            nickName: "real estate",
            imgUrl: "https://www.youtube.com/embed/IZfJcZcUOO0",
        },
        {
            name: 2,
            text: "Traditional Wedding",
            nickName: "real estate",
            imgUrl: "https://www.youtube.com/embed/cy0vXoSILgY",
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
 
export default Wemimo;