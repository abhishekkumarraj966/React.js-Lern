import './App.css';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules
import { Pagination, Navigation } from 'swiper/modules';

function App() {
      return (
      <>
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>Slide 1<br/> <h1>hello bro</h1></SwiperSlide>
          <SwiperSlide>Slide 2 <br/> <h1>hello bro</h1></SwiperSlide>
          <SwiperSlide>Slide 3 <br/> <h1>hello bro</h1></SwiperSlide>
          <SwiperSlide>Slide 4 <br/> <h1>hello bro</h1></SwiperSlide>
          <SwiperSlide>Slide 5 <br/> <h1>hello bro</h1></SwiperSlide>
          <SwiperSlide>Slide 6 <br/> <h1>hello bro</h1></SwiperSlide>
          <SwiperSlide>Slide 7 <br/> <h1>hello bro</h1></SwiperSlide>
          <SwiperSlide>Slide 8 <br/> <h1>hello bro</h1></SwiperSlide>
          <SwiperSlide>Slide 9 <br/> <h1>hello bro</h1></SwiperSlide>
        </Swiper>
      </>
    );
}

export default App;
