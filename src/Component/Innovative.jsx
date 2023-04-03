import React, { Component } from "react";

class Innovative extends Component {
  render() {
    return (
      <div>
        <div className="main-box">
          <div className="main-box1">
            <div className="box">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEtjV6OQC7GjWEXZTHsoksLIJqU-MobC1wPw&usqp=CAU"
                style={{
                  width: "80%",
                  height: "300px",
                  borderRadius: "20px",
                }}
              ></img>
            </div>
            <div className="box1" >
              <div className="box-2">
                <div className="innovative-1">
                  <u>What We Do</u>
                </div>
                <br />
                <br />
                <div className="innovative-1">
                  innovative Design &<br />
                  Branding
                </div>
                <div className="innovative-2">
                  {" "}
                  we understand our clients bussiness goals <br></br> first and
                  then all decisions made with those{" "}
                  </div>

                <br />
                <button className="btn" style={{ borderRadius: "60px" }}>
                  <div className="btn-1">Learn More</div>
                </button>
                <br />
                <div class="pagination">
  <a href="#">❮</a>
  <a href="#">❯</a>
</div>
               
              </div>
            </div>
          </div>
        </div>
        <div className="comment">
          <div className="clients">
            <h1>What Our Clients say</h1>
          </div>
          <div className="clients-1">
            <p>
              {" "}
              we understand our clients bussiness goals <br></br> first and then
              all decisions made with those{" "}
            </p>
            <div className="circle"></div>
          </div>
        </div>
        <div className="comment-4">
          <div className="circle-1"></div>
        </div>
       
      </div>
    );
  }
}

export default Innovative;
