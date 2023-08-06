import logo from './logo.svg';
import {useState} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Navbar, Container, Nav} from 'react-bootstrap'
import data from './data.js'
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom'
import {useParams} from 'react-router-dom'

function App(){
  let [shoe,setShoe] = useState(data);
  let navigate = useNavigate();
    
  return (
  <div className='App'>

    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link onClick={()=>{navigate('/')}}>Home</Nav.Link>
          <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link onClick={()=>{navigate('/detail/all')}}>Detail</Nav.Link>
        </Nav>
        </Container>
      </Navbar>
    </div>

    <Link to="/"> Home </Link>
    <Link to="/detail/all"> Detail</Link>

    <Routes>
      <Route path="/" element={
          <>
            <div className="container">
            <div className="row">
            {
            shoe.map(function(shoeData,){
              return(<Product data={shoeData}></Product>)
              })
            }          
            </div>
            </div>        
          </>
        }></Route>
        <Route path="/detail/all" element={
          <div>All the detail of products</div>
        }></Route>
        <Route path="/detail/:id" element={
          <>
          <div className="container">
            <div className="row">
              {
                <Detail data={data}></Detail>
              }
            </div>
          </div>  
          </>
          }>
      </Route>

      <Route path="/about" element={<div>about페이지</div>}> </Route>

      <Route path="*" element={<div>404 Error: Not Exist</div>}> </Route>      
    </Routes>

    </div>
  )



  function Product(props){
    return(
      <div className="col-md-4">
        <img src={'https://codingapple1.github.io/shop/shoes'+(props.data.id+1)+'.jpg'} width="80%" />
        <h4>{props.data.title}</h4>
        <p>{props.data.content}</p>
        <button className='btn btn-primary' 
          onClick={()=>{navigate('/detail/'+props.data.id)}}>Detail</button>
      </div>
    )
  }

  function Detail(props){
    let {id} = useParams();
    
    return(
      <>
    <div className="col-md-6">
      <img src={'https://codingapple1.github.io/shop/shoes'+(props.data[id].id+1)+'.jpg'} width="100%" />
    </div>
    <div className="col-md-6">
      <h4 className="pt-5">{props.data[id].title}</h4>
      <p>{props.data[id].content}</p>
      <p>{props.data[id].price} Won</p>
      <button className="btn btn-danger">Order</button> 
    </div>
    </>
  )}


}



export default App;
