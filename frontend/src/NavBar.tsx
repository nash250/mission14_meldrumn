import { NavLink } from "react-router-dom";

export function NavBar() {
  return (
    <nav className="navbar-container">
      <NavLink exact to="/">
        Home
      </NavLink>
      <NavLink to="/Podcasts">Podcasts</NavLink>
      <NavLink to="/Movies">Movies</NavLink>
    </nav>
  );
}