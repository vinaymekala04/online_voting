import React from 'react';
import "./Header.css";
import { Container,Nav,Navbar,NavDropdown } from 'react-bootstrap';
import { Route,Routes,NavLink} from 'react-router-dom';
import Home from '../Home';
import Signup from '../Signup';
import Login from '../Login';
import Contactus from '../Contactus';
import { useSelector } from 'react-redux';
import { useNavigate} from 'react-router-dom';
import Userdashboard from "../userdashboard/Userdashboard";
import Admindashboard from "../../admindashboard/Admindashboard";
import NewElection from "../../admindashboard/NewElection";
import ViewElection from "../../admindashboard/ViewElection";
import ViewResult from "../../admindashboard/ViewResult";
import EndElection from "../../admindashboard/EndElection";

function Header(){
  //get navigate function
  let navigate=useNavigate()
  //logout user
  const Logout=()=>{
    localStorage.clear()
    navigate('/login')
  }
  return(
      <div>
       <Navbar collapseOnSelect expand="sm" bg="dark" variant="dark" className='shadow'>
        <Container>
          <Navbar.Brand href="#home">Voting</Navbar.Brand>
          <Navbar.Toggle aria-controls='responsive-navbar-nav' />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className='ms-auto'>
              {localStorage.getItem('token')=== null ? (
                <>
                {/* These links can be visible then no user logged in */}
                <Nav.Item>
                  <Nav.Link  id="navlinks" eventLey="1" as={NavLink} to="/">
                    Home
                  </Nav.Link>
                </Nav.Item>

                <Nav.Item>
                  <Nav.Link  id="navlinks" eventLey="2" as={NavLink} to="/signup">
                    Signup
                  </Nav.Link>
                </Nav.Item>

                <Nav.Item>
                  <Nav.Link id="navlinks"  eventLey="3" as={NavLink} to="/login">
                    Login
                  </Nav.Link>
                </Nav.Item>

                <Nav.Item>
                  <Nav.Link id="navlinks" eventLey="4" as={NavLink} to="/contactus">
                    Contactus
                  </Nav.Link>
                </Nav.Item>
                </>
              ) : (
                <>
                {/* this dropdown is visible only when a user logged in */}
                <NavDropdown title={localStorage.getItem('token').username}   id="collasible-nav-dropdown" >
                  <NavDropdown.Item>
                    Change password
                  </NavDropdown.Item>

                  <NavDropdown.Divider/>

                  <NavDropdown.Item onClick={Logout}>
                    Logout
                  </NavDropdown.Item>

                </NavDropdown>
                
                </>
                
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
       </Navbar>
      
         <div>
          <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/signup" element={<Signup/>}/>
              <Route path="/login" element={<Login/>}/>
              <Route path="/contactus" element={<Contactus/>}/>
              <Route path="/userdashboard" element={<Userdashboard/>}/>
              <Route path="/admindashboard" element={<Admindashboard/>}>
                <Route path="newelection" element={<NewElection/>}/>
                <Route path="viewelection" element={<ViewElection/>}/>
                <Route path="viewresult" element={<ViewResult/>}/>
                <Route path="endelection" element={<EndElection/>}/>
              </Route>
              
          </Routes>
          </div>
      </div>
  )
}

export default Header;