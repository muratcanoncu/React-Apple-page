import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
//Components
import Navbar from "./Components/navbar";
import Body from "./Components/body";
import Form from "./Components/form";
import Footer from "./Components/footer";
import Carousel from "./Components/carousel";
//Images
import Logo from "./img/appleLogo.png";
import iphone8 from "./img/Iphone_8.jpg";
import iphone10 from "./img/Iphone_10.jpeg";
import iphone11 from "./img/Iphone_11.jpeg";
import iphone11pro from "./img/iphone_11Pro.jpg";
import iphone12 from "./img/Iphone_12.jpg";
import iphoneSe from "./img/Iphone_SE.jpeg";

function App() {
  return (
    <div className="App">
      <Navbar logo={Logo}></Navbar>
      <Carousel></Carousel>
      {/* Phone Models */}
      <div className="container-fluid">
        <div className="row mx-auto justify-content-center">
          <Body
            name="Iphone 8"
            year="2014"
            rate="6.8"
            price="350$"
            photo={iphone8}
          ></Body>
          <Body
            name="Iphone 10"
            year="2016"
            rate="7.2"
            price="420$"
            photo={iphone10}
          ></Body>
          <Body
            name="Iphone 11"
            year="2018"
            rate="7.4"
            price="470$"
            photo={iphone11}
          ></Body>
          <Body
            name="Iphone 11 Pro"
            year="2018"
            rate="7.5"
            price="500$"
            photo={iphone11pro}
          ></Body>
          <Body
            name="Iphone 12"
            year="2020"
            rate="8.2"
            price="600$"
            photo={iphone12}
          ></Body>
          <Body
            name="Iphone SE"
            year="2020"
            rate="7.7"
            price="450$"
            photo={iphoneSe}
          ></Body>
        </div>
      </div>
      <div className="container my-5">
        {/* Newsletter */}
        <Form></Form>
      </div>
      {/* Footer */}
      <Footer></Footer>
    </div>
  );
}

export default App;
