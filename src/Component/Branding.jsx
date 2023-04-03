import React, { Component } from "react";

class Branding extends Component {
  state = {};
  render() {
    return (
      <div className="main-container">
        <div className="border">
          <div className="digital_branding_font">
            Digital branding<br></br> & Advertising
          </div>
          <br></br>
          we understand our clients bussiness goals first<br></br> and then all
          decisions made with those
        </div>
        <div className="videos-container">
          <div className="video">
       
            <iframe className="video-1" src="https://www.youtube.com/embed/LGJExxDRXPs?controls=0" tittle="youtube video" allowFullScreen></iframe>
           
            <iframe  className="video-1" src="https://www.youtube.com/embed/KJe7yDTEDTU?controls=0" tittle="youtube video" allowFullScreen></iframe>
            
            <iframe className="video-1" src="https://www.youtube.com/embed/dJQn4DqzMVQ?controls=0" tittle="youtube video" allowFullScreen></iframe>
          </div>
          
        
        </div>

      </div>
    );
  }
}

export default Branding;
