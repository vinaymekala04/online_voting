import React from 'react';
import { Container,Nav,Navbar,NavDropdown } from 'react-bootstrap';
import { Route,Routes,NavLink,Outlet} from 'react-router-dom';
import NewElection from "./NewElection";
import ViewElection from "./ViewElection";
import ViewResult from "./ViewResult";
import EndElection from "./EndElection";
import image2 from '../images/images2.jpeg'
import '../componets/header/Header.css';

function Admindashboard()
{
    return(
        <>
        <Navbar className='shadow '>
                {/* These links can be visible then no user logged in */}
                <Nav.Item className='me-5'>
                  <Nav.Link eventLey="5" as={NavLink} to="/admindashboard/newelection">
                    New Election
                  </Nav.Link>
                </Nav.Item>

                <Nav.Item className='me-5'>
                  <Nav.Link eventLey="6" as={NavLink} to="/admindashboard/viewelection">
                     View ection
                  </Nav.Link>
                </Nav.Item>

                <Nav.Item className='me-5'>
                  <Nav.Link eventLey="7" as={NavLink} to="/admindashboard/viewresult">
                    View Result
                  </Nav.Link>
                </Nav.Item>

                <Nav.Item className='me-5'>
                  <Nav.Link eventLey="8" as={NavLink} to="/admindashboard/endelection">
                    End Election
                  </Nav.Link>
                </Nav.Item>
       </Navbar>
       <Outlet/>
      
      {/* <img  className="mt-5  d-block mx-auto w-100 h-50" src={image2} alt=''></img> */}


        </>
    )
  }

export default Admindashboard;