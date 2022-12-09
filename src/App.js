import ReactComponent, { useState } from "react";

import logo from "./assets/nufc-logo.png";
import heroImage from "./assets/hero/hero.jpg";
import heroImage1 from "./assets/hero/nufc-2021.jpg";
import heroImage2 from "./assets/hero/nufc-2019.jpg";

import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Toast from "react-bootstrap/Toast";
import Carousel from "react-bootstrap/Carousel";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import NavDropdown from "react-bootstrap/NavDropdown";
import { ReactComponent as Fb } from "./assets/facebook.svg";
import { ReactComponent as Ins } from "./assets/instagram.svg";
import "./App.css";
import "./styles.css";

import { indigo } from "@material-ui/core/colors";

const year = new Date().getFullYear();

const hero = [
  { image: heroImage, title: "THC Cup 2021", descp: "Palmerston North" },
  { image: heroImage1, title: "THC Cup 2021", descp: "Palmerston North" },
  { image: heroImage2, title: "THC Cup 2019", descp: "BOP, Tauranga" },
];

function App() {
  const [showA, setShowA] = useState(false);

  const toggleShowA = () => setShowA(!showA);

  return (
    <div className="App">
      <div className="pre-loader">
        <img src={logo} className="nufc-logo" alt="logo" />
      </div>
      <Navbar className="App-header" bg="light" expand="lg">
        <div className="clip-path"></div>
        <Container>
          <Navbar.Brand href="#home">
            <img src={logo} className="nav-logo" alt="logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="\">Home</Nav.Link>

              <Col md={6}>
                <Nav.Link onClick={toggleShowA}>Contact</Nav.Link>
                <Toast show={showA} onClose={toggleShowA}>
                  <Toast.Header>
                    <img
                      src="holder.js/20x20?text=%20"
                      className="rounded me-2"
                      alt=""
                    />
                    <strong className="me-auto">Email</strong>
                    <small>nepalutd@gmail.com</small>
                  </Toast.Header>
                  {/* <Toast.Body>
                    Woohoo, you're reading this text in a Toast!
                  </Toast.Body> */}
                </Toast>
              </Col>
            </Nav>
            <div className="aayo-nepali ">
              <p className="aayo-text">जय महाकाली !! आयो युनाईटेड नेपाली !!!</p>
              <p className="aayo-text">
                Jay Mahakali !! AAYO United Nepali !!!
              </p>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <div className="main-body">
        <Carousel fade variant="dark" className="hero">
          {hero.map((item, index) => (
            <Carousel.Item interval={2200} key={index}>
              <img
                className="d-block w-100 hero-image"
                src={item.image}
                alt={item.title}
              />
              <Carousel.Caption>
                <h5 className="descp-text">{item.title}</h5>
                <p className="descp-text">{item.descp}</p>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>

      <footer>
        <p>Copyright Nepal United FC {year} </p>
        <p className="share-btns">
          Follow us on{" "}
          <a
            href="https://www.facebook.com/NepalUtd"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            <Fb className="share" />
          </a>
          <a
            href="https://www.instagram.com/nepalutdfc/"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            <Ins className="share" />
          </a>
        </p>
      </footer>
    </div>
  );
}

export default App;
