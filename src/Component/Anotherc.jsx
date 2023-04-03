import { Collapse } from "bootstrap";
import React, { Component } from "react";

class Anotherc extends Component {
  state = {
    collect: this.props.Anotherc,
  };
  render() {
    return (
      <div className="card" style={{height:"420px",borderRadius:"30px 30px 30px 30px"}}>
        <img className="card-img-top1"
          src={this.state.collect.photo}
          
          style={{ objectFit:"cover",borderRadius:"30px 30px 0px 0px",height:"300px"}}
          alt="..."
        />
        <div className="card-body">
        <h5 className="card-title">{this.state.collect.title}</h5>
          <p className="card-text">
           {this.state.collect.paraa}
          </p>
        </div>
      </div>
    );
  }
}

export default Anotherc;
