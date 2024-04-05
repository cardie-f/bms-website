import React from "react";
import "../App.css";
import sectionone from "../images/sectionone.jpg";
import imgThree from "../images/imgThree.png";
import imgSix from "../images/imgSix.jpg";
import Footer from "../Sections/Footer";

function Home() {
  return (
    <div className="home">
      <div className="header-section"></div>

      <div className="section-one">
        <div className="left-one">
          <h1>
            Monitor your <br></br> data center{" "}<br></br>
            <span className="efficiently">efficiently</span>
          </h1>
          <p>
            Access your data center monitoring page effortilessly by logging in
          </p>
          <div className="sectionone-btn">
            <button>Login</button>
            <button>Contact us</button>
          </div>
        </div>

        <div className="right-one">
          <img src={sectionone} alt="My Image" />
        </div>
      </div>

      <div className="section-two">
        <p>trusted bt proffessionals and teams at top tier business</p>
        <div className="bs-logo">
          <h4>tigo</h4>
          <h4>Vodacom</h4>
          <h4>NMB</h4>
          <h4>CRDB</h4>
        </div>
      </div>

      <div className="section-three">
        <div className="left-three">
          <img src={imgThree} alt="My Image" />
        </div>

        <div className="right-three">
          <p>MOBILE APP</p>
          <h2>
            Download Our <br></br>
            <span className="mobile-app"> Mobile App</span> Today
          </h2>

          <p>Experience the freedom and frexibility of monitoring on the go</p>
          <p>
            Whether you are busy proffessional, a remote worker, or always on
            the move, our mobile app impowers you to stay connected and
            productive, ensuring your system are always running smoothly
          </p>

          <div className="btn-three">
            <button>Play stote</button>
            <button>App stote</button>
          </div>
        </div>
      </div>

      <div className="section-four">
        <div className="left-four">hello</div>
        <div className="right-four">hii</div>
      </div>

      <div className="section-five">
        <div className="h-five">
          <h2>Testimonials</h2>
          <p>People love what we do and we want to let you know</p>
        </div>

        <div className="content-five">
          <div className="card-5">
            <p>erioj djoerji kjeoir</p>
            <h5>john</h5>
            <p>DC</p>
          </div>
          <div className="card-5">
            <p>erioj djoerji kjeoir</p>
            <h5>john</h5>
            <p>DC</p>
          </div>
          <div className="card-5">
            <p>erioj djoerji kjeoir</p>
            <h5>john</h5>
            <p>DC</p>
          </div>
        </div>
      </div>

      <div className="section-six">
         <div className="left-six">
          <h1>Get started with <br></br> globoBMS today</h1>
          <p>start monitoring today</p>
          <button>Contact us</button>
         </div>

         <div className="right-six">
         <img src={imgSix} alt="My Image" />
         </div>

      </div>

      <Footer></Footer>
    </div>
  );
}

export default Home;
