import React from 'react';
import '../header/Header.css';

export default function Carousel() {
  return (
    <>
     <div id="carouselExampleControls" className="carousel slide my-1" data-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item">
            <img className="img-fluid w-100" src="https://rukminim2.flixcart.com/fk-p-flap/844/140/image/fe37d9750b067d16.jpg?q=50" alt="Second slide" />
          </div>
          <div className="carousel-item">
            <img className="img-fluid w-100" src="https://rukminim2.flixcart.com/fk-p-flap/1688/280/image/ed7882682b00d542.jpg?q=50" alt="Third slide" />
          </div>
          <div className="carousel-item active">
            <img className="img-fluid w-100" src="https://rukminim2.flixcart.com/fk-p-flap/3376/560/image/5c28b798715ba85f.jpg?q=50" alt="First slide" />
          </div>
        </div>
        <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href=" #carouselExampleControls" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="sr-only">Next</span>
        </a>
      </div>
    
    
    </>
  );
}
