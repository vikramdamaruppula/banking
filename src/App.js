import React from "react"
import Header from "./components/Header";
import Explore from "./components/Explore";
import BottomTop from "./components/BottomTop";
import Footer from "./components/Footer";
import HomeBanner from './AllImages/Home - Banner 1 BG.jpg'
import HomeBanner2 from './AllImages/Home - Banner 2 BG.jpg'

import './index.css'
function App() {
  return (
    <div> 
    <Header />
    <div className="App">
      <div className="Text-content1">
        <div className="Text-content">
        <h1 style={{margin:"0px "}}> Simplicity, Value <br /> & Convenience</h1>
        <p> Modern private bank,servicing all your needs in one <br />place</p>
        <button>Apply Now</button>
        </div>
      </div>
      <img src={HomeBanner} alt="home" className="banner" />
    </div>
    <Explore />
    <div className="App">
      <div className="Text-content11">
        <img src={HomeBanner2} alt="home" className="banner" />
        <div className="Text-content111">
        <h1 style={{margin:"0px "}}> Get your own <br /> Account Today</h1>
        <p>Our online account openings  takes just couple of <br /> minutes,opens world of possibilities for our clients </p>
        <button>Apply Now</button>
        </div>
      </div>
    </div>
    <BottomTop />
    <Footer />
    </div>
  );
}

export default App;
