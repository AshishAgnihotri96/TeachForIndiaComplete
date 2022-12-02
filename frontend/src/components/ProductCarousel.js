import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

import { Button, Carousel, Image } from 'react-bootstrap'


    let carouselData=[

        {
            image:"https://www.teachforindia.org/assets/website-carousel-alumni.png"
        },
        {
            image:"https://www.teachforindia.org/assets/Annual_Report_website.png"   
        },
        {
            image:"https://www.teachforindia.org/assets/fellowship-desktop.png"
        },
        {
            image:"https://www.teachforindia.org/assets/website-carousel-1.png"
        }
       


]


const ProductCarousel = () => {
    useEffect(()=>{
        
    },[carouselData])
	return (
        <>
		<Carousel  class="img-wrapper" pause='hover' className='bg-light'>
			{carouselData.map((carouselData,ind) => (
				<Carousel.Item key={ind} interval={2000}>
					
						<Image class="img-responsive" src={carouselData.image}   />
						<Carousel.Caption className='carousel-caption'>
                            <div class="img-overlay">
                                <Link to="/register">
							<Button class="btn btn-md btn-success">
								Apply Now
							</Button>
                            </Link>
                            </div>
						</Carousel.Caption>
					
				</Carousel.Item>
			))}
		</Carousel>
        </>
    )
       
}

export default ProductCarousel
