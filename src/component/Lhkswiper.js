import swiperDBlink from '../json/portfolio.json';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';

const Lhkswiper = () => {
    const swiperinfo = swiperDBlink.portfolio;
      return(
        <Swiper className='workSection'
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        loop = {true} 
        pagination={{ clickable: true }}d
        scrollbar={{ draggable: true }}
        onSlideChange={() => {
          //슬라이드가 끝나고 실행
        }}
        onSwiper={(swiper) => console.log(swiper)}
         >
          {
            swiperinfo.map( ( item, index ) => {
                   return(
                    <SwiperSlide className={item.cls} key={'sw'+index} style={{ background : item.bg }} id='portfolio'>
                    <a href = {item.href} className='d-flex justify-content-center align-items-center'>
                      <div>
                      <h3 className='text-decoration-none'>{item.worktitle}</h3>
                      </div>
                    </a>
                    </SwiperSlide>
                   )
              }
            )
          }
             
        </Swiper>
      )
  }
  
  export default Lhkswiper;