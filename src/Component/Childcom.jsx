import React, { Component } from "react";

class Childcom extends Component {
  state = {
    collection: this.props.childcom,
  };
  render() {
    return (
      <div className="Card-main"  >
  <div className="card" style={{objectfit: "cover",borderRadius:"50px",boxShadow:"50px",height:"400px",transition:"0.1sec"}}>
        <img className="card-img-top1" src={this.state.collection.photo}
        
        style={{ objectfit: "cover",borderRadius:"50px 50px 0px 0px",height:"200px" }}
        alt="..."/>
        <div className="card-body">
          
          <h5 className="card-title">{this.state.collection.title}</h5>
          <p className="card-text">{this.state.collection. paragraph}</p>
          <div className="some">
          <a href="#" className="btn btn-primary">{this.state.collection.some}</a>
          </div>
          </div>
          </div>
      </div>
     
     
      
      
    );
  }
}

export default Childcom;
