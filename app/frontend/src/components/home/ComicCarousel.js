import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';


const ComicCarousel = () => {
    return (
        <Carousel className="carousel-container" autoPlay infiniteLoop showThumbs={false} showArrows={false} showStatus={false} showIndicators={false} stopOnHover={false}>
            <div >
                <img src='http://x.annihil.us/u/prod/marvel/i/mg/3/40/4bb4680432f73/portrait_incredible.jpg' />
            </div>
            <div >
                <img src='http://x.annihil.us/u/prod/marvel/i/mg/3/40/4bb4680432f73/portrait_incredible.jpg' />
            </div>
            <div >
                <img src='http://x.annihil.us/u/prod/marvel/i/mg/3/40/4bb4680432f73/portrait_incredible.jpg' />
            </div>
            <div >
                <img src='http://x.annihil.us/u/prod/marvel/i/mg/3/40/4bb4680432f73/portrait_incredible.jpg' />
            </div>
        </Carousel>
    );
};

export default ComicCarousel;