import { MDBContainer } from "mdbreact";
import { Link } from "react-router-dom";

const Gallery = () => {
    
    const GalleryImgs = [
        {
            name: 1,
            to:'/Wemimo',
            text: "Wemimo and Ayotunde",
            nickName: "wedding vediography",
            imgUrl: "https://res.cloudinary.com/tosin/image/upload/v1622237194/detrix/WEMIMO.jpg",
            
        },
        {
            name: 2,
            text: "fransica Muse",
            nickName: "real estate",
            imgUrl: "https://res.cloudinary.com/tosin/image/upload/v1621792591/detrix/P1120768.jpg",
        },
        {
            name: 3,
            to:'/Lolade',
            text: "Lolade And Lanre",
            nickName: "real estate",
            imgUrl: "https://res.cloudinary.com/tosin/image/upload/v1621983199/detrix/lolade%20and%20lanre/P1120768a.jpg",
        },
        {
            name: 4,
            to:'/Lanre',
            text: "Lanre and Henry",
            nickName: "wedding Videography",
            imgUrl:"https://res.cloudinary.com/tosin/image/upload/v1622235742/detrix/LANRE_1.jpg",
        },
        {
            name: 5,
            to:'/Lolade',
            text: "Lorem ipsum dolor ",
            nickName: "photography",
            imgUrl: "https://res.cloudinary.com/tosin/image/upload/v1621792592/detrix/P1130106.jpg",
        },
        {
            name: 6,
            to:'/Chichi',
            text: "Chichi and Davonche",
            nickName: "real estate",
            imgUrl: "https://res.cloudinary.com/tosin/image/upload/v1621892685/detrix/P1190394_1.jpg",
        }
    
    ];
    return (
        <MDBContainer>
            <h1 className='ImgGridTittle'>Wedding Gallery</h1>
                <div className='imageGrid'>
                    {GalleryImgs.map((GalleryImg, index) => (
                        <Link to={GalleryImg.to}>
                            <div key={GalleryImg.name + index}>
                                <img
                                    className='gridImg'
                                    src={GalleryImg.imgUrl}
                                    alt={`${GalleryImg.name}`}
                                />
                                <h3 className='gridText'>{GalleryImg.text}</h3>
                            </div>
                        </Link>
                    ))}
                </div>
        </MDBContainer>
    );
};
 
export default Gallery;