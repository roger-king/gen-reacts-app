import React from 'react';
import { Link, IndexLink} from 'react-router';
import './header.scss';

const Header = () =>{
  return(
    <nav>
      <IndexLink to="/" activeClassName="active"> Home </IndexLink>
      {" | "}
      <Link to="/courses" activeClassName="active"> Courses </Link>
      {" | "}
      <Link to="/about" activeClassName="active"> About </Link>
    </nav>
  );
};

export default Header;
