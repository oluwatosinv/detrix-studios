import CarouselPage from './Carousel';
import Carousel from './Carousel'
import Gallery from './Gallery'
import Corporate from './NonWeddingVid';
import TestimonialsPage from './TestimonialsPage';
import VideoTest from './VideoTest';

const HomePage = () => {
    return ( 
        <div>
            <CarouselPage />
            <Gallery />
            <TestimonialsPage />
            <Corporate />
        </div>
     );
}
 
export default HomePage;