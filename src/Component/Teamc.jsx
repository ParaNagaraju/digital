import React, { Component } from 'react';
import { AiFillTwitterCircle ,AiFillLinkedin} from "react-icons/ai";
import {BsFacebook,BsGithub} from "react-icons/bs";


class Teamc extends Component {
    state={
        information:this.props.Teamc
    }
    render() {
        return (
          <div>
          <div className="wholecontainer">
      <div className="card4" >
      <img className="card-top" src={this.state.information.photo}/>
       {/* style={{objectFit: "cover", borderRadius:"20px 20px 0px 0px"}} */}
      <div className="c-body">
        <h5 className="c-title">{this.state.information.name}</h5>
        <h5 className="c-role">{this.state.information.role}</h5>
        <p className="c-text">{this.state.information. description}</p>
        <div className="icons">
          <a href="#">
            <AiFillTwitterCircle />
          </a>
          <a href="#">
            <BsFacebook />
          </a>
          <a href="#">
            <BsGithub/>
          </a>
          <a href="#">
            <AiFillLinkedin/>
          </a>
          </div>
      
    </div>
    </div>
                   
            </div>
            </div>
         
           
        );
    }
}

export default Teamc;

