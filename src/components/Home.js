
// import React from 'react';
// import Carousel from 'react-bootstrap/Carousel'



// const Slider = () =>{
//     return(
//         <main className="slider">
//   <Carousel>
//   <Carousel.Item>
//     <img
     
//       className="d-block"
//       src="http://res.cloudinary.com/dqphzmuq1/image/upload/v1556835271/samples/paintings/photo-1497534547324-0ebb3f052e88.jpg"
//       alt="First slide"
//     />
//     <Carousel.Caption>
//     </Carousel.Caption>
//   </Carousel.Item>
//   <Carousel.Item className="slider">
//     <img
//       className="d-block"
//       src="http://res.cloudinary.com/dqphzmuq1/image/upload/v1556835128/samples/paintings/photo-1503220178855-e31ec372b8ad.jpg"
//       alt="Third slide"
//     />
   
//     <Carousel.Caption>
      
//     </Carousel.Caption>
//   </Carousel.Item>
//   <Carousel.Item>
//     <img
//       className="d-block"
//       src="http://res.cloudinary.com/dqphzmuq1/image/upload/v1556818773/paintings/photo-1503220178855-e31ec372b8ad.jpg"
//       alt="Third slide"
//     />

//     <Carousel.Caption>
     
//     </Carousel.Caption>
//   </Carousel.Item>
// </Carousel>
//         </main>
 
//     )



// }

// export default Slider

import React from "react"


import { MDBCarousel,  MDBCarouselInner, MDBCarouselItem, MDBView,  } from
"mdbreact";

const Home  = () => {
  return (
    <main className="home">
    <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img className="carousel-image" src="https://images.unsplash.com/photo-1511367734837-f2956f0d8020?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1388&q=80" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img className="carousel-image" src="https://images.unsplash.com/photo-1488841714725-bb4c32d1ac94?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1432&q=80" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img className="carousel-image" src="https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80" class="d-block w-100" alt="..."/>
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
      {/* <MDBCarousel
        activeItem={1}
        length={3}
        showControls={true}
        showIndicators={true}
        className="z-depth-1 slider-img"
      >
        <MDBCarouselInner>
          <MDBCarouselItem itemId="1">
            <MDBView>
              <img
                className="d-block"
                src="https://images.unsplash.com/photo-1511367734837-f2956f0d8020?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1388&q=80"
                alt="First slide"
              />
            </MDBView>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="2">
            <MDBView>
              <img
                className="d-block"
                src="https://images.unsplash.com/photo-1488841714725-bb4c32d1ac94?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1432&q=80"
                alt="Second slide"
              />
            </MDBView>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="3">
            <MDBView>
              <img
                className="d-block"
                src="https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80"
                alt="Third slide"
              />
            </MDBView>
          </MDBCarouselItem>
        </MDBCarouselInner>
      </MDBCarousel> */}
      </main>
 
  );
}

// export default CarouselPage;
// const Home = () =>{
//     return(
//         <h1>Estamos en Homepage</h1>
//     )
// }


export default Home