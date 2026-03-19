import { Link } from 'react-router-dom';

export const NavBar = () => {
  return (
    <div className="header__container">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
    </div>
  );
};
