import React from 'react'
import './Testimonial.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import profilerPic1 from '../../img/profile1.jpg'
import profilerPic2 from '../../img/profile2.jpg'
import profilerPic3 from '../../img/profile3.jpg'
import profilerPic4 from '../../img/profile4.jpg'
import { Pagination } from 'swiper';
import 'swiper/css/pagination'
import'swiper/css'
const Testimonial = () => {
    const clients =[
        {
            img:profilerPic1,
            preview:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis odio laborum eos itaque mollitia repellendus, voluptas sit hic incidunt soluta cupiditate similique dignissimos. Error ipsum perferendis consequatur accusantium atque facere."
        },
        {
            img:profilerPic2,
            preview:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis odio laborum eos itaque mollitia repellendus, voluptas sit hic incidunt soluta cupiditate similique dignissimos. Error ipsum perferendis consequatur accusantium atque facere."
        },
        {
            img:profilerPic3,
            preview:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis odio laborum eos itaque mollitia repellendus, voluptas sit hic incidunt soluta cupiditate similique dignissimos. Error ipsum perferendis consequatur accusantium atque facere."
        },
        {
            img:profilerPic4,
            preview:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis odio laborum eos itaque mollitia repellendus, voluptas sit hic incidunt soluta cupiditate similique dignissimos. Error ipsum perferendis consequatur accusantium atque facere."
        }
    ]
  return (
    <div className='t-wrapper' id='Testimonials'>
        <div className="t-heading">
            <span>Client always get</span>
            <span>Exceptionl Works</span>
            <span>from me...</span>
            <div className="blur t-blurl"style={{background:"var(--purple)"}}></div>
            <div className="blur t-blur2"style={{background:"skyblue"}}></div>
        </div>
        {/* slider */}
        <Swiper 
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{clickable:true}}
        >
            {clients.map((client, index)=>{
                return( <SwiperSlide>
                    <div className='testimonial'>
                 <img src={client.img} alt="" />
                 <span>{client.preview}</span>
                    </div>
             </SwiperSlide>)
            })}
       
        </Swiper>
    </div>
  )
}

export default Testimonial
