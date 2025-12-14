import { NavLink } from 'react-router-dom';

function Nav() {

  return (
    <nav>
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? "active" : undefined
        }
        end
      >Home</NavLink>
      <NavLink to="/services"
        className={({ isActive }) =>
          isActive ? "active" : undefined
        }
      >Services</NavLink>
      <NavLink to="/work"
        className={({ isActive }) =>
          isActive ? "active" : undefined
        }
      >Work</NavLink>
      <NavLink to="/about"
        className={({ isActive }) =>
          isActive ? "active" : undefined
        }
      >About</NavLink>
      <NavLink to="/contact"
        className={({ isActive }) =>
          isActive ? "active" : undefined
        }
      >Contact</NavLink>
    </nav>
  );
}

export default Nav;