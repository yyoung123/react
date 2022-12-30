import { Button, Navbar, Container, Nav } from "react-bootstrap";
import "./App.css";
import background from "./images/w.png";
// import shoes from "./images/i.png";
import { useState } from "react";
import data from "./data.js";
import { Routes, Route, Link } from "react-router-dom";

function App() {
  let [shoes] = useState(data);

  return (
    <div className="App">
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home">Bonjour!</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <div>메인페이지</div>
              <div className="main-bg" style={{ backgroundImage: "url(" + background + ")" }}>
                {" "}
              </div>
            </>
          }
        />
        <Route path="/detail" element={<div>상세페이지</div>} />
      </Routes>
      <div className="container list">
        <div className="row">
          <div className="col-md-4">
            {/* <img src={shoes} alt="" width="60%" /> */}
            <img src={process.env.PUBLIC_URL + "/images/i.png"} alt="" width="60%" />
            <h4>{shoes[0].title}</h4>
            <p>{shoes[0].content}</p>
            <p>price: {shoes[0].price}</p>
          </div>
          <div className="col-md-4">
            <img src="https://codingapple1.github.io/shop/shoes2.jpg" width="80%" />
            <h4>{shoes[1].title}</h4>
            <p>{shoes[1].content}</p>
            <p>price: {shoes[1].price}</p>
          </div>
          <div className="col-md-4">
            <img src="https://codingapple1.github.io/shop/shoes3.jpg" width="80%" />
            <h4>{shoes[2].title}</h4>
            <p>{shoes[2].content}</p>
            <p>price: {shoes[2].price}</p>
          </div>
          {/* 컴포넌트 사용 
          <ShoeList shoes={shoes[0]} i={1} />
          <ShoeList shoes={shoes[1]} i={2} />
          <ShoeList shoes={shoes[2]} i={3} /> */}
          {shoes.map(function (a, i) {
            return <ShoeList shoes={shoes[i]} i={i} />;
          })}
        </div>
      </div>
    </div>
  );
}

function ShoeList(props) {
  return (
    <div className="col-md-4">
      <img src={"https://codingapple1.github.io/shop/shoes" + (props.i + 1) + ".jpg"} width="80%" />
      <h4>{props.shoes.title}</h4>
      <p>{props.shoes.content}</p>
      <p>{props.shoes.price}</p>
    </div>
  );
}
export default App;
