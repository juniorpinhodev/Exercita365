import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UsersContext } from '../context/UsersContext';

const Navbar = () => {
    const { logout } = useContext(UsersContext);
  
    const handleLogout = () => {
      logout();
      window.location.href = '/login';
    };

  return (
    <nav className='nav'>
      <>
        <Link to="/">Home</Link> &nbsp;
        <Link to="/users/registration">Usuários</Link> &nbsp;
        <Link to="/local-registration">Locais</Link> &nbsp;
        <button onClick={handleLogout}>Logout (Sair)</button>
      </>
    </nav>
  );
};

export default Navbar;
