import React,{ Component } from "react";
import Childcom from "./Component/Childcom";
import Component1 from "./Component/Component1";
import Small from "./Component/Small";
import Another from "./Component/Another";
import Branding from "./Component/Branding";
import Team from "./Component/Team";
import Innovative from "./Component/Innovative";
import Slider1 from "./Component/Slider1";
import { Swiper, SwiperSlide } from "swiper/react";


export default class App extends Component {
  render() {
    return (
    
      <div>
        <Swiper/>
        <SwiperSlide/>
       <Component1/> 
       <Small/>
       <Another/>
       <Branding/>
       <Team/>
       <Innovative/>
       <Slider1/>
       {/* <Slider/> */}
      </div>
    );
  }
}