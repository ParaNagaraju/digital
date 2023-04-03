import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import ReactStars from "react-rating-stars-component";

import { FreeMode, Pagination } from "swiper";
const Carosuel = () => {
  let reactSwipeE1;

  const [cards, setCards] = useState([
    {
      photo:
        "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?cs=srgb&dl=pexels-italo-melo-2379004.jpg&fm=jpg",
      name: "appu",
      description:
        "we strive to understand our client's bussiness goals first then all decisions made with those",
     
      role:"developer",
    },
    {
      photo:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bWVufGVufDB8fDB8fA%3D%3D&w=1000&q=80",
      name: "appu",
      description:
        "we strive to understand our client's bussiness goals first then all decisions made with those",
     
      role:"developer",
    },
    {
      photo:
        "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?cs=srgb&dl=pexels-italo-melo-2379004.jpg&fm=jpg",
      name: "appu",
      description:
        "we strive to understand our client's bussiness goals first then all decisions made with those",
     
      role:"developer",
    },
    {
      photo:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bWVufGVufDB8fDB8fA%3D%3D&w=1000&q=80",
      name: "appu",
      description:
        "we strive to understand our client's bussiness goals first then all decisions made with those",
     
      role:"developer",
    },
    {
      photo:
        "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?cs=srgb&dl=pexels-italo-melo-2379004.jpg&fm=jpg",
      name: "appu",
      description:
        "we strive to understand our client's bussiness goals first then all decisions made with those",
     
      role:"developer",
    },
  ]);

  return (
    <>
      <Swiper
        slidesPerView={2}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
        {cards.map((card, index) => (
          <SwiperSlide key={index}>
            <div className="slider-no99">
            <div class="card" style={{ height: "300px",width:"250px",display:"flex",alignItems:"center", }}>
              <div class="card-body" >
                <p class="card-text">{card.description}</p>
                <h5 class="card-title">
               
  

                   <ReactStars
    count={5}
    // onChange={ratingChanged}
    size={24}
    activeColor="#ffd700"
  /></h5>
                <div  style={{ display: "flex", alignItems: "center" }}>
                  <img
                    className="card-img"
                    style={{
                      width: "100px",
                      height: "100px",
                      borderRadius: "50px",
                    }}
                    src={card.photo}
                    alt="Card image cap"
                  />
                  <div>
                  <p>{card.name}</p>
                  <p>{card.role}</p>
                  </div>
                </div>
              </div>
            </div>
            </div>
          </SwiperSlide>
        ))}
       
      </Swiper>
    </>
  );
};
export default Carosuel;
