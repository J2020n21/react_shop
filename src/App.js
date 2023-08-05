import logo from './logo.svg';
import {useState} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Navbar, Container, Nav} from 'react-bootstrap'
import data from './data.js'


function App(){
  let [shoe,setShoe] = useState(data);
    
  return (

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

      <div className="container">
        <div className="row">
          {/* <div className="col-md-4"> */}
          
          {
            shoe.map(function(shoeData,i){
              return(
                <Product data={shoeData} num={i}></Product>
                
              )
            })
          }
          
          {/* </div> */}
        </div>
      </div>
    </div>
  )



  function Product(props){
    console.log({props});
    return(
      
      <div className="col-md-4">
        <img src={'https://codingapple1.github.io/shop/shoes'+(props.num+1)+'.jpg'} width="80%" />
        <h4>{props.data.title}</h4>
        <p>{props.data.content}</p>
    </div>
    )
  }


}



export default App;
