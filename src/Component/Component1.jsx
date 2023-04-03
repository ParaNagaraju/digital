
import React, { Component } from "react";
import Childcom from "./Childcom";
class Component1 extends Component {
  state = {
    collection: [
      {
        title: "great support",
        paragraph:
          "we strive to understand our ients bussiness goals first then all decisions are made with those",
        some: "learn more",
        photo:"https://images.pexels.com/photos/3680219/pexels-photo-3680219.jpeg?cs=srgb&dl=pexels-lukas-rodriguez-3680219.jpg&fm=jpg",
      },
      {
        title: "pixel-perfect Drsign",
        paragraph:
          "we strive to understand our ients bussiness goals first then all decisions are made with those",
        some: "learn more",
        photo:"https://images.pexels.com/photos/3680219/pexels-photo-3680219.jpeg?cs=srgb&dl=pexels-lukas-rodriguez-3680219.jpg&fm=jpg",
      },
      {
        title: "SEO Optimized",
        paragraph:
          "we strive to understand our ients bussiness goals first then all decisions are made with those",
        some: "learn more",
        photo:"https://images.pexels.com/photos/3680219/pexels-photo-3680219.jpeg?cs=srgb&dl=pexels-lukas-rodriguez-3680219.jpg&fm=jpg",
        
      },
    ],
  };
  render() {
    return (
      <div className="main">
        <div className="market">
          <h1>
            marketing <br></br>& design
          </h1>
          <p>
            Digital marketing agency.we strive <br></br> to understand our
            client's bussiness goals first then <br></br> all decisions are made
            with those
          </p>
        </div>
         <div className="row">
        {this.state.collection.map((prod) => {
          return <Childcom key={prod.title} childcom={prod}></Childcom>;
        })}
        </div>

        <div>
         
        </div>
      </div>
      

     
    );
  }
}

export default Component1;
