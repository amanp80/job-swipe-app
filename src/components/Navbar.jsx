import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <Link to="/">Home</Link>
      <Link to="/profile">Profile</Link>
      <Link to="/likes">Likes</Link>
    </nav>
  );
};

export default Navbar;