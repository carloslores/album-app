import React from "react"



const Home  = () => {
  return (
    <main className="home">
             <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img className="carousel-image" src="https://images.unsplash.com/photo-1511367734837-f2956f0d8020?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1388&q=80" className="d-block w-100" alt="..."/>
                    </div>
                    <div className="carousel-item">
                        <img className="carousel-image" src="https://images.unsplash.com/photo-1488841714725-bb4c32d1ac94?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1432&q=80" className="d-block w-100" alt="..."/>
                    </div>
                     <div className="carousel-item">
                       <img className="carousel-image" src="https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80" className="d-block w-100" alt="..."/>
                    </div>
                </div>
                  <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                  </a>
                  <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                  </a>
          </div>
     
      </main>
 
  );
}


export default Home