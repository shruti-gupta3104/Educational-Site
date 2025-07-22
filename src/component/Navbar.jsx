import { Link } from "react-router-dom";
import { useState } from "react";
import "./Navbar.css";
// import 'font-awesome/css/font-awesome.min.css';


function Navbar() {
  const [click, setClick] = useState(false)

  return (
    <div>
        <header>
        <nav className='flexSB'>
          <ul className={click ? "mobile-nav" : "flexSB "} onClick={() => setClick(false)}>
            <li>
              <Link to='/' >Home</Link>
            </li>
            <li>
              <Link to='/course'>All Courses</Link>
            </li>
            <li>
              <Link to='/about'>About</Link>
            </li>
            <li>
              <Link to='/contact'>Contact</Link>
            </li>
          </ul>

          <button className='toggle' onClick={() => setClick(!click)}>
            {click ? <i className='fa fa-times'> </i> : <i className='fa fa-bars'></i>}
          </button>
        </nav>
      </header>
    </div>
  );
}

export default Navbar;
