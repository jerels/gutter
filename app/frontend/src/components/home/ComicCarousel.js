import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';


const ComicCarousel = () => {
    return (
        <Carousel autoPlay infiniteLoop showThumbs={false} showArrows={false} showStatus={false} showIndicators={false} stopOnHover={false}>
            <div >
                <img src='https://i.stack.imgur.com/qVML6l.jpg' width="auto" height="auto" />
            </div>
            <div >
                <img src='https://images-na.ssl-images-amazon.com/images/S/cmx-images-prod/Item/858369/858369._SX1600_QL80_TTD_.jpg' />
            </div>
            <div >
                <img src='https://imgix.ranker.com/user_node_img/50028/1000557804/original/superman-_75-u2?fit=crop&fm=pjpg&q=60&w=650&dpr=2' />
            </div>
            <div >
                <img src='https://static.comicvine.com/uploads/original/5/55074/1161661-x_men136.jpg' />
            </div>
        </Carousel>
    );
};

export default ComicCarousel;