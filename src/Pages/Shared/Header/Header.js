import React, { useContext } from 'react';
import { Button, Image } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaUserAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import LeftSideNav from '../LeftSideNav/LeftSideNav';

const Header = () => {

    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error))
    }

    return (
        <Navbar collapseOnSelect className='mb-4 sticky-top' expand="lg" bg="light" variant="light">
            <Container>
                <Navbar.Brand ><Link to='/'>News Portal</Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className='ms-auto'>
                        <div>
                            <>
                                {
                                    user?.uid ?
                                        <>
                                            <span className='me-3'> {user?.displayName} </span>
                                            <Button variant='light' className='me-3' onClick={handleLogOut}>Log Out</Button>
                                        </>
                                        :
                                        <>
                                            <Link to='/login' className='me-3 text-decoration-none'>Login</Link>
                                            <Link to='/register' className='me-3 text-decoration-none'>Register</Link>
                                        </>
                                }
                            </>
                            <Link to="/profile">
                                {
                                    user?.photoURL
                                        ?
                                        <Image
                                            roundedCircle
                                            src={user?.photoURL}
                                            className='me-3'
                                            style={{ height: '30px', width: '30px' }}
                                        ></Image>
                                        :
                                        <FaUserAlt></FaUserAlt>
                                }

                            </Link>
                        </div>
                    </Nav>
                    <div className='d-lg-none d-block'>
                        <LeftSideNav></LeftSideNav>
                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;