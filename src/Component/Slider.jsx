import React from "react";
import ReactDOM from "react-dom";
import ReactSwipe from "react-swipe";

const Carousel = () => {
  let reactSwipeEl;

  return (
    <div>
      <ReactSwipe
        className="carousel"
        swipeOptions={{ continuous: false }}
        ref={(el) => (reactSwipeEl = el)}
      >
        <div>
            <center>
            <div class="card">
  <div class="card-body">
    
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <h5 class="card-title">Card title</h5>
    <img class="card-img-top" src="..." alt="Card image cap"/>
  </div>
</div>
</center>
</div>
        <div>
            <center>
            <div class="card">
  
  <div class="card-body">
   
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <img class="card-img-top" src="..." alt="Card image cap"/>
    <h5 class="card-title">Card title</h5>
  </div>
</div>
</center>
</div>
        <div>
            <center>
            <div class="card" >
  
  <div class="card-body">
   
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <img class="card-img-top" src="..." alt="Card image cap"/>
    <h5 class="card-title">Card title</h5>
  </div>
</div>
</center>
</div>
      </ReactSwipe>
      <center>
        <button onClick={() => reactSwipeEl.next()}>Next</button>
        <button onClick={() => reactSwipeEl.prev()}>Previous</button>
      </center>
    </div>
  );
};

// ReactDOM.render(<Carousel />, document.getElementById('app'));
export default Carousel;
