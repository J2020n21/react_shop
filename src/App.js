import logo from './logo.svg';
import {useState} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Navbar, Container, Nav} from 'react-bootstrap'
import data from './data.js'
import { Routes, Route, Link } from 'react-router-dom'


function App(){
  let [shoe,setShoe] = useState(data);
    
  return (
  <div className='App'>

    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
        </Nav>
        </Container>
      </Navbar>
    </div>

    <Link to="/"> Home </Link>
    <Link to="/detail"> Detail</Link>

    <Routes>
      <Route path="/" element={
          <>
            <div className="container">
            <div className="row">
            {
            shoe.map(function(shoeData,i){
              return(<Product data={shoeData} num={i}></Product>)
              })
            }          
            </div>
            </div>        
          </>
        }></Route>

        <Route path="/detail" element={
          <>
          <div className="container">
          <div className="row">
            {
              shoe.map(function(data,i){
                return(<Detail data={data} num={i}></Detail>)
              })
            }
          
          </div>
          </div>  
          </>
          }>
      </Route>

      <Route path="/about" element={<div>about페이지</div>}> </Route>      
    </Routes>

    </div>
  )


  function Product(props){
    return(
      <div className="col-md-4">
        <img src={'https://codingapple1.github.io/shop/shoes'+(props.num+1)+'.jpg'} width="80%" />
        <h4>{props.data.title}</h4>
        <p>{props.data.content}</p>
      </div>
    )
  }

  function Detail(props){
    return(
      <>
    <div className="col-md-6">
      <img src={'https://codingapple1.github.io/shop/shoes'+(props.num+1)+'.jpg'} width="100%" />
    </div>
    <div className="col-md-6">
      <h4 className="pt-5">{props.data.title}</h4>
      <p>{props.data.content}</p>
      <p>{props.data.price} Won</p>
      <button className="btn btn-danger">Order</button> 
    </div>
    </>
  )}


}



export default App;
