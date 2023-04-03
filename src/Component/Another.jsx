import React, { Component } from 'react';
import Anotherc from "./Anotherc";

class Another extends Component {
    state={
        collect:[
            {
               title:"Fully Responsive.",
               paraa:"our clients bussiness goals first them all decisions are made with those",
               photo:"https://images.pexels.com/photos/3680219/pexels-photo-3680219.jpeg?cs=srgb&dl=pexels-lukas-rodriguez-3680219.jpg&fm=jpg",
            },
            {
                title:"SEO optimized.",
                paraa:"our clients bussiness goals first them all decisions are made with those",
                photo:"https://images.pexels.com/photos/3680219/pexels-photo-3680219.jpeg?cs=srgb&dl=pexels-lukas-rodriguez-3680219.jpg&fm=jpg",
            },
            {
            title:"Ecommerce integrated.",
            paraa:"our clients bussiness goals first them all decisions are made with those",
            photo:"https://images.pexels.com/photos/3680219/pexels-photo-3680219.jpeg?cs=srgb&dl=pexels-lukas-rodriguez-3680219.jpg&fm=jpg",
        },
        {
            title:"Awesome features.",
            paraa:"our clients bussiness goals first them all decisions are made with those",
            photo:"https://images.pexels.com/photos/3680219/pexels-photo-3680219.jpeg?cs=srgb&dl=pexels-lukas-rodriguez-3680219.jpg&fm=jpg",
        },
        {
            title:"Layer slider.",
            paraa:"our clients bussiness goals first them all decisions are made with those",
            photo:"https://images.pexels.com/photos/3680219/pexels-photo-3680219.jpeg?cs=srgb&dl=pexels-lukas-rodriguez-3680219.jpg&fm=jpg",
        },
        {
        title:"one-Click import.",
        paraa:"our clients bussiness goals first them all decisions are made with those",
        photo:"https://images.pexels.com/photos/3680219/pexels-photo-3680219.jpeg?cs=srgb&dl=pexels-lukas-rodriguez-3680219.jpg&fm=jpg",
        },
        ]
    }
    render() {
        return (
            <div className='core'>
             <div className='features'>
                <div className="features-1">
                <h1>Some Awesome<br></br> Features</h1>
                <p>as a digital marketing agency, we strive to <br></br>
                understand our client's bussiness goals first<br></br>
                 then all decisions made with those</p>
            </div>
            <div className='features-2'>
               <p> Explore as features</p>
            </div>
            </div>
            <div className='row'>
                {this.state.collect.map((prod)=>{
                    return <Anotherc key={prod.title} Anotherc={prod}>
                        
                    </Anotherc>
                })}
            </div>
           
            </div>
        );
    }
}

export default Another;