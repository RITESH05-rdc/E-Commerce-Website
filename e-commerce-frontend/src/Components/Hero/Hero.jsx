import React from 'react'; 
import 'bootstrap/dist/css/bootstrap.css'; 
import Carousel from 'react-bootstrap/Carousel'; 

export default function Hero() { 
return ( 
  
	<div style={{ display: 'block', width: 1530, padding: 30 }}> 
	<Carousel> 
		<Carousel.Item interval={500}> 
		<img 
			className="d-block w-100"
src="https://i.postimg.cc/SRXNDksB/hero-img.jpg"
			alt="Image One"
		/> 
		<Carousel.Caption> 
			{/* <h3>Label for first slide</h3> 
			<p>Sample Text for Image One</p>  */}
		</Carousel.Caption> 
		</Carousel.Item> 

		<Carousel.Item interval={500}> 
		<img 
			className="d-block w-100"
src="https://i.postimg.cc/GmfbM9Vq/hero-img2.jpg"
			alt="Image Two"
		/> 
		<Carousel.Caption> 
			{/* <h3>Label for second slide</h3> 
			<p>Sample Text for Image Two</p>  */}
		</Carousel.Caption> 
		</Carousel.Item> 

    <Carousel.Item interval={500}> 
		<img 
			className="d-block w-100"
src="https://i.postimg.cc/gJJC1fvb/hero-img3.jpg"
			alt="Image Two"
		/> 
		<Carousel.Caption> 
			{/* <h3>Label for second slide</h3> 
			<p>Sample Text for Image Two</p>  */}
		</Carousel.Caption> 
		</Carousel.Item> 

	</Carousel> 

  
	</div> 
); 
}

// export default Hero;